import style from "./UserMixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MixtapeListItem(props) {
  async function deleteMixtape() {
    await mixtapesAPI.deleteMixtape(props.mixtape._id);
    props.mixtape.setMixtapeInState(props.mixtape);
  }

  return (
    <div className={style.mixtapeInfoContainer}>
      <h3>
        {props.mixtape.name}
      </h3>
      <p>
        Moods:
        {props.mixtape.moods.map((m) => (
          <span>  {m.content} </span>
        ))}
      </p>
      <p>
        {/* Cocktails:{" "} */}
        {props.mixtape.cocktails.map((c) => (
          <span>{c.name}</span>
        ))}
      </p>
      <a href={props.mixtape.playlists} target="_blank">Playlist</a>
      <p>Shared?: {props.mixtape.shared ? "Public" : "Private"} </p>
      <button><Link className={style.link} to={`/mixtapes/${props.mixtape._id}`}>Edit</Link></button>
      <button onClick={deleteMixtape}>DELETE</button>
    </div>
  );
}
