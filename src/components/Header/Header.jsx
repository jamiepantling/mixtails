import UserLogOut from "../UserLogOut/UserLogOut";
import { Link } from 'react-router-dom'
import style from "./Header.module.css";

export default function Header(props) {

  return (
    <div className={style.header}>
      <nav id="navbar" className={style.nav}>
        <Link to="/home" className={style.logo}>
          Mixtails
        </Link>
        <div>
          <Link className={style.dropC} to="/moods">Moods</Link>
          <Link className={style.dropC} to="/cocktails">Cocktails</Link>
          <Link className={style.dropC} to="/flavours">Flavour Profiles</Link>
          <Link className={style.dropC} to="/mixtapes">Mixtapes</Link>
          <Link className={style.dropC} to="/user">Profile</Link>
        </div>

        <UserLogOut setUserInState={props.setUserInState} />
      </nav>
    </div>
  );
}
