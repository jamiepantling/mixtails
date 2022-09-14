import style from "./MixtapeListItem.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MixtapeListItem(props) {
  return (
    <div className={style.mixtapeInfoContainer}>
      <h3>
        <Link to={`/mixtapes/${props.mixtape._id}`}>{props.mixtape.name}</Link>
      </h3>
      <p className={style.cocktailsContainer}>
        {/* Cocktails:{" "} */}
        {props.mixtape.cocktails.map((cocktail) => (
          <div className={style.cocktailButton}>{cocktail.name}</div>
        ))}
      </p>
      <a
        href={props.mixtape.playlists}
        target="_blank"
        className={style.spotifyAnchor}
      >
        <div className={style.playlistButton}>
          <div className={style.spotify}>
            <FontAwesomeIcon icon={brands("spotify")} />
          </div>
          Playlist
        </div>
      </a>
    </div>
  );
}
