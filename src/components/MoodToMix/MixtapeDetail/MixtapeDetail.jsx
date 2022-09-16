import { useParams } from "react-router-dom";
import * as mixtapeApi from "../../../utilities/mixtapes-api";
import * as moodApi from "../../../utilities/moods-api";
import { useEffect, useState } from "react";
import style from "./MixtapeDetail.module.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MixtapeDetail(props) {
  const params = useParams();
  let [mixtape, setMixtape] = useState({});
  let [moods, setMoods] = useState([]);
  let [mixtapeMoodIds, setMixtapeMoodIds] = useState([]);
  let [playlist, setPlaylist] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

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
    console.log(evt);
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
      if (fetchResponse) {
        setSuccess("Saved.");
      }
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
    <div className={style.main}>
      <div className={style.content}>
        <h3 className={style.mood}>
          <span
            className={name.length < 34 ? style.moodTitle : style.moodTitleLong}
          >
            {name}
          </span>
        </h3>
        {props.user && mixtape.createdBy === props.user._id ? (
          <div className={style.formContainer}>
            <form onSubmit={handleSubmit}>
              <div className={style.inputButtonContainer}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className={`${style.input} ${style.nameInput}`}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                {error ? <p>{error}</p> : <></>}
                <br />
                <button className={style.button}>
                  <span>Save</span>
                </button>
              </div>
              {success ? <p>{success}</p> : <></>}
            </form>
          </div>
        ) : (
          <></>
        )}
        <h2>Cocktail</h2>
        <div className={style.cocktailsContainer}>
          {mixtape.cocktails &&
            mixtape.cocktails.map((c) => (
              <div className={style.cocktailButton}>{c.name}</div>
            ))}
        </div>

        <a
          href={mixtape.playlists}
          target="_blank"
          className={style.spotifyAnchor}
        >
          <div className={style.playlistButton}>
            <div className={style.spotify}>
              <FontAwesomeIcon icon={brands("spotify")} />
            </div>
            Playlist
          </div>
        </a>

        {props.user && mixtape.createdBy === props.user._id ? (
          <div>
            <div className={style.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className={style.inputButtonContainer}>
                <input
                  type="text"
                  name="playlist"
                  value={playlist}
                  className={`${style.input} ${style.playlistInput}`}
                  onChange={(e) => setPlaylist(e.target.value)}
                ></input>
                <br />
                <button className={style.button}>
                  <span>Save</span>
                </button>
                </div>
                {success ? <p>{success}</p> : <></>}
              </form>
            </div>

            <div className={style.moodButtonSection}>
              <h2>Current moods</h2>

              <div
                className={`${style.moodButtonContainer} ${style.moodButtonContainerMobile}`}
              >
                {mixtape.moods
                  .sort((a, b) =>
                    a.content > b.content ? 1 : b.content > a.content ? -1 : 0
                  )
                  .map((mood) => (
                    <div className={style.moodButton}>
                      {mood.content}

                      <div
                        className={style.xButton}
                        id={mood._id}
                        onClick={() => handleMoodClick(mood)}
                      >
                        X
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={style.moodButtonSection}>
              <h2>Add moods</h2>

              <div
                className={`${style.moodButtonContainer} ${style.moodButtonContainerMobile}`}
              >
                {moods
                  .filter(
                    (mood) =>
                      !mixtape.moods.some((curr) => curr._id === mood._id)
                  )
                  .sort((a, b) =>
                    a.content > b.content ? 1 : b.content > a.content ? -1 : 0
                  )
                  .map((mood) => (
                    <div
                      className={`${style.moodButton} ${style.addMoodButton}`}
                      id={mood._id}
                      onClick={() => handleMoodClick(mood)}
                    >
                      {mood.content}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={style.moodButtonSection}>
              <h3 className={style.h3}>Moods</h3>

              <div
                className={`${style.moodButtonContainer} ${style.moodButtonContainerMobile}`}
              >
                {mixtape.moods &&
                  mixtape.moods
                    .sort((a, b) =>
                      a.content > b.content ? 1 : b.content > a.content ? -1 : 0
                    )
                    .map((mood) => (
                      <div className={style.moodButton}>{mood.content}</div>
                    ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
