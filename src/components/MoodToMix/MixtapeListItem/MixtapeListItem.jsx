import style from  "./MixtapeListItem.module.css";

export default function MixtapeListItem(props) {
  return (
    <div className={style.content}>
      <h3>Name: {props.mixtape.name}</h3>
      {/* <p>Associated Moods:{props.mixtape.moods.map(m => <span>{m.content}</span>)}</p> */}
      <p>Associated Moods:{props.mixtape.moods}</p>
      <p>Playlist: {props.mixtape.playlists}</p>
      <p>Shared?: {props.mixtape.shared ? "Public" : "Private"} </p>
    </div>
  )
}
