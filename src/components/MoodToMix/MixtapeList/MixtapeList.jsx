import MixtapeListItem from "../MixtapeListItem/MixtapeListItem";
import { useState } from "react";
import style from "./MixtapeList.module.css"

export default function MixtapeList(props) {

    return (
      <div className={style.mixtailsContainer}>
        {props.mixtapes.map(mixtape => <MixtapeListItem key={mixtape._id} mixtape={mixtape}/>)}
      </div>
    )
}