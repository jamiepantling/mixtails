import MoodListItem from "../MoodListItem/MoodListItem"
import styles from "./MoodList.module.css"
import { useEffect, useState } from "react";
import * as moodsApi from "../../utilities/moods-api";
import { Link } from 'react-router-dom'


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
    <Link to={`/moods/${mood._id}`} ><MoodListItem key={mood._id} {...mood} /></Link>
    ));


    return (
        <div>
          Mood list:
            {moods}
        </div>
    )
}