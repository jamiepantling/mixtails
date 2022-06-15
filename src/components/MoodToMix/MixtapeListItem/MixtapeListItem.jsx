
import style from  "./MixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";
import { Link } from 'react-router-dom'


export default function MixtapeListItem(props) {
  
  async function deleteMixtape() {
    await mixtapesAPI.deleteMixtape(mixtape._id);
    mixtape.setMixtapeInState(mixtape)
  }
    
  return (

    <div className={style.content}>
      <h3><Link to={`/mixtapes/${mixtape._id}`}>{props.mixtape.name}</Link></h3>
      <p>Associated Moods:{props.mixtape.moods.map(m => <span>{m.content}</span>)}</p>
      <p>Cocktails: {props.mixtape.cocktails.map(c => <span>{c.name}</span>)}</p>
      <p>Playlist: {props.mixtape.playlists}</p>
      <p>Shared?: {props.mixtape.shared ? "Public" : "Private"} </p>
      <button onClick={deleteMixtape}>DELETE</button>
    </div>
  )
  }
