import MoodList from "../../components/MoodToMix/MoodList/MoodList";
import Header from "../../components/Header/Header";
import style from "./MoodPage.module.css";
import { useState, useEffect } from "react";
import MixtapeForm from "../../components/MoodToMix/MixtapeForm/MixtapeForm";
import * as moodsAPI from "../../utilities/moods-api";
import * as mixtapesAPI from "../../utilities/mixtapes-api";

export default function MoodPage(props) {
  const [moodsList, setMoodList] = useState([]);
  const [mixtapesList, setMixtapesList] = useState([]);
  const [showMixtapeForm, setShowMixtapeForm] = useState(false);

  async function fetchMoods() {
    const moods = await moodsAPI.getMoods();
    setMoodList(moods);
  }
  async function fetchMixtapes() {
    const mixtapes = await mixtapesAPI.getMixtapes();
    setMixtapesList(mixtapes);
  }

  useEffect(function () {
    fetchMoods();
    fetchMixtapes();
  }, []);

  return (
    <main>
      <Header
        setUserInState={props.setUserInState}
        user={props.user}
        public={props.public}
      />
      <div className={style.content}>
        <h1 className={style.title}> pick a mixtail</h1>

        {props.public ? (
          <div className={style.publicIntro}>
            Log in to create your own mixtail,
            <br /> or browse through the moods below:
          </div>
        ) : (
          <div className={style.introMixtailFormContainer}>
            <div className={style.publicIntro}>
              Pick a mixtail from the moods below or create your own
            </div>
            <div
              className={style.createMood}
              onClick={() => setShowMixtapeForm(!showMixtapeForm)}
            >
              <span className={style.moodTitle}>Create your own mixtail!</span>
            </div>
            {showMixtapeForm && (
              <MixtapeForm
                user={props.user}
                fetchMixtapes={fetchMixtapes}
                setShowMixtapeForm={setShowMixtapeForm}
              />
            )}
          </div>
        )}
        <MoodList
          moodsList={moodsList}
          setMoodList={setMoodList}
          mixtapesList={mixtapesList}
        />
      </div>
    </main>
  );
}
