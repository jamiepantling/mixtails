
import style from  "./MixtapeListItem.module.css";

export default function MixtapeListItem(props) {
  return (
    <div className={style.content}>
      <h3>{props.mixtape.name}</h3>
      <p>Associated Moods:{props.mixtape.moods.map(m => <span>{m.content}</span>)}</p>
      <p>Cocktails: {props.mixtape.cocktails.map(c => <span>{c.name}</span>)}</p>
      <p>Playlist: {props.mixtape.playlists}</p>
      <p>Shared?: {props.mixtape.shared ? "Public" : "Private"} </p>
    </div>
  )
