
import style from  "./MixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";
import { Link } from 'react-router-dom'


export default function MixtapeListItem(props) {
  
  return (

    <div className={style.content}>
      <h3><Link to={`/mixtapes/${props._id}`}>{props.name}</Link></h3>
      <p>Associated Moods:{props.moods.map(m => <span>{m.content}</span>)}</p>
      <p>Cocktails: {props.cocktails.map(c => <span>{c.name}</span>)}</p>
      <p>Playlist: {props.playlists}</p>
      <p>Shared?: {props.shared ? "Public" : "Private"} </p>

    </div>
  )
  }
