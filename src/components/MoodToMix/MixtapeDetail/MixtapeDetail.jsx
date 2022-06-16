import { useParams } from "react-router-dom";
import * as mixtapeApi from "../../../utilities/mixtapes-api";
import * as moodApi from "../../../utilities/moods-api";
import { useEffect, useState } from "react";
import style from "./MixtapeDetail.module.css";
import { useMediaQuery } from 'react-responsive'

export default function MixtapeDetail(props) {
  const params = useParams();
  let [mixtape, setMixtape] = useState({});
  let [moods, setMoods] = useState([]);
  let [mixtapeMoodIds, setMixtapeMoodIds] = useState([]);
  let [playlist, setPlaylist] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 800 })
  const isBigScreen = useMediaQuery({ minWidth: 801 })
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
      console.log("Error: ", error);
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

        <div className={style.content}>
          <h3 className={style.h3}>Cocktails:</h3>
          <div className={style.detailsList}>
            {mixtape.cocktails && mixtape.cocktails.map((c) => (
              <span>{c.name}</span>
            ))}
          </div>
          <h3 className={style.detailsList}>
            <a href={mixtape.playlists}  target="_blank">Playlist</a>
          </h3>
         
          {/* <button onClick={deleteMixtape}>DELETE</button> */}
        </div>
        {mixtape.createdBy === props.user._id ? (
        <div>
        <div>
        <h1>Update</h1>
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
          <br />
          <button className={style.button}>
            <span>Save</span>
          </button>
          {success ? <p>{success}</p> : <></>}
        </form>
        </div>

          <div className={style.moodButtonSection}>
            <h2>{mixtape.name}'s moods:</h2>
            {isBigScreen && <div className={`${style.moodButtonContainer} ${style.moodButtonContainerBigScreen}`}>
              {mixtape.moods.sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
                <div className={style.moodButton}>
                  {mood.content}

                      <div className={style.xButton} id={mood._id} onClick={() => handleMoodClick(mood)}>
                        X
                      </div>

                </div>
              ))}
            </div>}
            {isMobile && <div className={`${style.moodButtonContainer} ${style.moodButtonContainerMobile}`}>
              {mixtape.moods.sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
                <div className={style.moodButton}>
                  {mood.content}

                      <div className={style.xButton} id={mood._id} onClick={() => handleMoodClick(mood)}>
                        X
                      </div>

                </div>
              ))}
            </div>}
        </div>
          <div className={style.moodButtonSection}>
            <h2>Add moods to {mixtape.name}:</h2>
            {isMobile && 
            <div className={`${style.moodButtonContainer} ${style.moodButtonContainerMobile}`}>
              {moods
                .filter(
                  (mood) => !mixtape.moods.some((curr) => curr._id === mood._id)
                )
                .sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
                  <div className={`${style.moodButton} ${style.addMoodButton}`} id={mood._id} onClick={() => handleMoodClick(mood)}>
                    {mood.content}
                  </div>
                ))}
            </div>
            }
            {isBigScreen && 
            <div className={`${style.moodButtonContainer} ${style.moodButtonContainerBigScreen}`}>
              {moods
                .filter(
                  (mood) => !mixtape.moods.some((curr) => curr._id === mood._id)
                )
                .sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
                  <div className={`${style.moodButton} ${style.addMoodButton}`} id={mood._id} onClick={() => handleMoodClick(mood)}>
                    {mood.content}
                  </div>
                ))}
            </div>
            }
          </div>
        </div>
      ) : 
        <><div className={style.moodButtonSection}>
        <h2>{mixtape.name}'s moods:</h2>
        {isBigScreen && <div className={`${style.moodButtonContainer} ${style.moodButtonContainerBigScreen}`}>
          {mixtape.moods && mixtape.moods.sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
            <div className={style.moodButton}>
              {mood.content}
            </div>
          ))}
        </div>}
        {isMobile && <div className={`${style.moodButtonContainer} ${style.moodButtonContainerMobile}`}>
          {mixtape.moods && mixtape.moods.sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
            <div className={style.moodButton}>
              {mood.content}
            </div>
          ))}
        </div>}
    </div></>
      }
    </div>

  );
}
