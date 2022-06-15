import style from "./MixtapeListItem.module.css";

export default function MixtapeListItem(props) {
  return (
    <div className={style.mixtail}>
      <h3>{props.mixtape.name}</h3>
      <label htmlFor="">Cocktails</label>
      <ul>
        {props.mixtape.cocktails.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
      <label htmlFor="">Playlist</label>
      <ul>
        <li>{props.mixtape.playlists}</li>
      </ul>
    </div>
  );
}
