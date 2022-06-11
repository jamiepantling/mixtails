import MoodListItem from "../MoodListItem/MoodListItem"
import styles from "./MoodList.module.css"
import { useEffect, useState } from "react";
import * as moodsApi from "../../utilities/moods-api";


export default function MoodList(props) {


    const [moodList, setMoodList] = useState([]);

    useEffect(function () {
      async function fetchMoods() {
        const moods = await moodsApi.getMoods();
        setMoodList(moods);
      }
      fetchMoods();
    }, []);
  
    const moods = moodList.map((mood) => (
    <MoodListItem key={mood._id} {...mood} />
    ));


    return (
        <div>
          Mood list:
            {moods}
        </div>
    )
}