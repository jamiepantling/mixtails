import MoodList from "../../components/MoodList/MoodList";
import Header from "../../components/Header/Header";
import style from "./MoodPage.module.css"

export default function MoodPage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <div className={style.content}>
      <h1 className={style.title}>Feel it out</h1>
      <MoodList />
      </div>
    </main>
  );
}
