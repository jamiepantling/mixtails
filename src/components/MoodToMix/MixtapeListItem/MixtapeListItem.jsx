import style from "./MixtapeListItem.module.css";
import { Link } from "react-router-dom";

export default function MixtapeListItem(props) {
  return (
    <div className={style.mixtapeInfoContainer}>
      <h3>
        <Link to={`/mixtapes/${props.mixtape._id}`}>{props.mixtape.name}</Link>
      </h3>
      <p>
        {/* Cocktails:{" "} */}
        {props.mixtape.cocktails.map((cocktail) => (
          <span>{cocktail.name}</span>
        ))}
      </p>
      <a href={props.mixtape.playlists} target="_blank">
        Playlist
      </a>
    </div>
  );
}
