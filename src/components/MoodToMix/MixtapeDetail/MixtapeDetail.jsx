import { useParams } from "react-router-dom";
import * as mixtapeApi from "../../../utilities/mixtapes-api";
import * as moodApi from "../../../utilities/moods-api";
import { useEffect, useState } from "react";
import style from "./MixtapeDetail.module.css";
import { Link } from 'react-router-dom'

export default function MixtapeDetail(props) {
  const params = useParams();
  let [mixtape, setMixtape] = useState({});
  let [moods, setMoods] = useState([]);
  let [mixtapeMoodIds, setMixtapeMoodIds] = useState([]);
  let [playlist, setPlaylist] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  // mixtape.moods.map(mood => moods.find(x=>x._id === mood))

  useEffect(() => {
    async function getMoods() {
      let res = await moodApi.getMoods();
      setMoods(res);
    }
    getMoods();
    getMixtape(params.id);
    
  }, []);


  async function getMixtape(id) {
    let res = await mixtapeApi.getMixtapeById(id);
    setMixtape(res);
    setName(res.name);
    setPlaylist(res.playlists[0]);
  }


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!name) {
      setError("Mixtape name is required.");
      return setName(mixtape.name);
    }
    try {
      let fetchResponse = await mixtapeApi.updateMixtape(mixtape._id, {
        name,
        playlist,
      });
      if (fetchResponse) setSuccess("Saved.");
      getMixtape(params.id);
    } catch (error) {
      console.log("Error: ", error)
    }
  };

  const handleMoodClick = (mood) => {
    mixtapeApi.addRemoveMood(mood._id, params.id);
    let tempMoods = [...mixtape.moods];
    if (mixtape.moods.includes(mood)) {
      let idx = tempMoods.indexOf(mood);
      tempMoods.splice(idx, 1);
    } else {
      tempMoods = [...tempMoods, mood];
    }
    setMixtape({ ...mixtape, moods: tempMoods });
  };

  return (
    <div>
      <h1>Mixtape: {mixtape.name}</h1>
      <div>
      {/* <div className={style.content}>
      <p>
        Associated Moods:
        {mixtape.moods.map((m) => (
          <span>{m.content}</span>
        ))}
      </p>
      <p>
        Cocktails:
        {mixtape.cocktails.map((c) => (
          <span>{c.name}</span>
        ))}
      </p>
      <a href={mixtape.playlists} target="_blank">Playlist</a>
      <p>Shared?: {mixtape.shared ? "Public" : "Private"} </p>
      <button onClick={deleteMixtape}>DELETE</button>
    </div> */}
        <form onSubmit={handleSubmit}>
          <label className={style.label}>Update name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {error ? <p>{error}</p> : <></>}
          <label className={style.label}>Update playlist:</label>
          <input
            type="text"
            name="playlist"
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
          ></input>
          <button className={style.button}><span>Save</span></button>
          {success ? <p>{success}</p> : <></>}
        </form>
      </div>
      {mixtape.createdBy === props.user._id ? (
        <div>
          <h2>{mixtape.name}'s moods:</h2>
          <ul>
            {mixtape.moods.map((mood) => (
              <div className={style.div}>
                <div>{mood.content}</div>
                <div>
                  <button id={mood._id} onClick={() => handleMoodClick(mood)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </ul>

          <div>
            <h2>Add moods to {mixtape.name}:</h2>
            <ul>
              {
                // moods.filter(mood => mixtape.moods.forEach(
                //   mixtape.mood._id === mood._id ? true : false
                // ))
                // moods.map(mood => forEach(mood => {
                //     mixtape.moods.forEach(mixtapeMood => {
                //       if (mixtapeMood._id != mood._id)
                      
                // })

                moods
                  .filter((mood) => !mixtape.moods.includes(mood))
                  .map((mood) => (
                    <button id={mood._id} onClick={() => handleMoodClick(mood)}>
                      {mood.content}
                    </button>
                  ))
              }
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

// useEffect( () => {
//     if (mixtape.moods) setMixtapeMoods(mixtape.moods.map(mood => moods.find(x=>x._id === mood).content))
// }, [mixtape])

// if (mixtape.moods) setMixtapeMoods(mixtape.moods.map(mood => moods.find(x=>x._id === mood).content))
