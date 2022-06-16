import MoodListItem from "../MoodListItem/MoodListItem";
import style from "./MoodList.module.css";


export default function MoodList(props) {

  const moods = props.moodsList.map((mood) => (
    <MoodListItem
      key={mood._id}
      {...mood}
      mixtapesList={props.mixtapesList.filter((mixtape) =>
        mixtape.moods.find((moods) => moods._id === mood._id)
      )}
    />
  ));

  return <div className={style.moodsContainer}>{moods}</div>;
}
