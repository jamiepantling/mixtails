import MoodList from "../../components/MoodList/MoodList";
import Header from "../../components/Header/Header";
import style from "./MoodPage.module.css"
import { useState } from "react";
import MixtapeForm from "../../components/MixtapeForm/MixtapeForm"



export default function MoodPage(props) {

  let [showMixtapes, setShowMixtapes] = useState(false)

  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <div className={style.content}>
      <h1 className={style.title}>Feel it out</h1>
      <MoodList />
      <button onClick={()=>setShowMixtapes(!showMixtapes)}>Create your own mixtape!</button>
      {showMixtapes? <MixtapeForm/> :<></>}
      </div>
 
    </main>
  );
}
