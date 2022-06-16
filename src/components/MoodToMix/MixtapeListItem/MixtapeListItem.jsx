import style from "./MixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MixtapeListItem(props) {
  async function deleteMixtape() {
    await mixtapesAPI.deleteMixtape(props.mixtape._id);
    props.mixtape.setMixtapeInState(props.mixtape);
  }

  return (
    <div className={style.content}>
      <h3>
        <Link to={`/mixtapes/${props.mixtape._id}`}>{props.mixtape.name}</Link>
      </h3>
      <p>
        Associated Moods:
        {props.mixtape.moods.map((m) => (
          <span>{m.content}</span>
        ))}
      </p>
      <p>
        Cocktails:{" "}
        {props.mixtape.cocktails.map((c) => (
          <span>{c.name}</span>
        ))}
      </p>
      <p>Playlist: {props.mixtape.playlists}</p>
      <p>Shared?: {props.mixtape.shared ? "Public" : "Private"} </p>
      {/* <button><Link</button> */}
      <button onClick={deleteMixtape}>DELETE</button>
    </div>
  );
}
