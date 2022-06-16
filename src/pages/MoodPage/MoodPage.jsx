import MoodList from "../../components/MoodToMix/MoodList/MoodList";
import Header from "../../components/Header/Header";
import style from "./MoodPage.module.css"
import { useState, useEffect } from "react";
import MixtapeForm from "../../components/MoodToMix/MixtapeForm/MixtapeForm"
import * as moodsAPI from "../../utilities/moods-api";
import * as mixtapesAPI from "../../utilities/mixtapes-api";



export default function MoodPage(props) {
  const [moodsList, setMoodList] = useState([]);
  const [mixtapesList, setMixtapesList] = useState([]);
  const [showMixtapeForm, setShowMixtapeForm] = useState(false)
  // const [filteredMixtapeList, setFilteredMixtapeList] = useState([]);

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
      <Header setUserInState={props.setUserInState} />
      <div className={style.content}>
      <h1 className={style.title}>Feel it out</h1>
      <MoodList moodsList={moodsList} setMoodList={setMoodList} mixtapesList={mixtapesList} />
      <button onClick={()=>setShowMixtapeForm(!showMixtapeForm)}>Create your own mixtape!</button>
      {showMixtapeForm? <MixtapeForm user={props.user} fetchMixtapes={fetchMixtapes} setShowMixtapeForm={setShowMixtapeForm}/> :<></>}
      </div>
 
    </main>
  );
}
