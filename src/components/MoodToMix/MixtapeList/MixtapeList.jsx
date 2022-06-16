import MixtapeListItem from "../MixtapeListItem/MixtapeListItem";
import { useState } from "react";
import style from "./MixtapeList.module.css"

export default function MixtapeList(props) {

    return (
      <div className={style.mixtailsContainer}>
        {props.mixtapes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(mixtape => <MixtapeListItem key={mixtape._id} mixtape={mixtape}/>)}
      </div>
    )
}