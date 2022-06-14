import MixtapeListItem from "../MixtapeListItem/MixtapeListItem";
import { useState } from "react";

export default function MixtapeList(props) {

    return (
      <div>
        {props.mixtapes.map(mixtape => <MixtapeListItem key={mixtape._id} mixtape={mixtape}/>)}
      </div>
    )
}