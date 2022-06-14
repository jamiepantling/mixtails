import MoodListItem from "../MoodListItem/MoodListItem";
import style from "./MoodList.module.css";
import { useEffect, useState } from "react";
import * as moodsAPI from "../../../utilities/moods-api";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";

export default function MoodList(props) {
  const [moodList, setMoodList] = useState([]);
  const [mixtapeList, setMixtapeList] = useState([]);
  const [filteredMixtapeList, setFilteredMixtapeList] = useState([]);

  useEffect(function () {
    async function fetchMoods() {
      const moods = await moodsAPI.getMoods();
      setMoodList(moods);
      console.log(moods)
    }
    async function fetchMixtapes() {
      const mixtapes = await mixtapesAPI.getMixtapes();
      setMixtapeList(mixtapes);
      console.log(mixtapes)
    }
    fetchMoods();
    fetchMixtapes();
  }, []);

  const moods = moodList.map((mood) => (
    <MoodListItem setMoodList={setMoodList} key={mood._id} {...mood} 
    mixtapes={mixtapeList.filter(mixtape => mixtape.moods[0]._id.includes(mood._id))} 
    // mixtapes ={mixtapeList} 
    // mixtapes={filteredMixtapeList}
    />
  ));

  return <div className={style.content}>{moods}</div>;
}
