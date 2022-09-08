import style from "./UserMixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MixtapeListItem(props) {
  async function deleteMixtape() {
    await mixtapesAPI.deleteMixtape(props.mixtape._id);
    props.setMixtapeInState(props.mixtape);
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
      <a href={props.mixtape.playlists} target="_blank"><div className={style.playlistButton}> Playlist</div></a>
      <p>Shared: {props.mixtape.shared ? "Public" : "Private"} </p>
      <div className={style.buttonContainer}>
        <div className={style.editButton}><Link className={style.link} to={`/mixtapes/${props.mixtape._id}`}><span>Edit</span></Link></div>
        <div className={style.deleteButton} onClick={deleteMixtape}><span>DELETE</span></div>
      </div>
    </div>
  );
}
