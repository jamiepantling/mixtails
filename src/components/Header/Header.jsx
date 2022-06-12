import UserLogOut from "../UserLogOut/UserLogOut";
import style from "./Header.module.css";

export default function Header(props) {

  return (
    <div className={style.header}>
      <nav id="navbar" className={style.nav}>
        <a href="/home" className={style.logo}>
          Mixtails
        </a>
        <div>
          <a className={style.dropC} href={"/moods"}>Moods</a>
          <a className={style.dropC} href={"/cocktails"}>Cocktails</a>
          <a className={style.dropC} href={"/flavours"}>Flavour Profiles</a>
          <a className={style.dropC} href={"/playlists"}>Playlists</a>
          <a className={style.dropC} href={"/user"}>Profile</a>
        </div>

        <UserLogOut setUserInState={props.setUserInState} />
      </nav>
    </div>
  );
}
