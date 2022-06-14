import { Link } from 'react-router-dom'
import style from "./Header.module.css";

export default function Header(props) {

  return (
    <div className={style.header}>
      <nav id="navbar" className={style.nav}>
        <Link to="/home" className={style.logo} alt="Mixtails Logo"></Link>
        <div>
          <Link className={style.dropC} to={"/user"}>Profile</Link>
          <Link className={style.dropC} to={"/moods"}>Moods</Link>
          <Link className={style.dropC} to={"/cocktails"}>Ctails</Link>
          <Link className={style.dropC} to={"/flavours"}>Flav</Link>
          <Link className={style.dropC} to={"/playlists"}>PL</Link>
        </div>
      </nav>
    </div>
  );
}
