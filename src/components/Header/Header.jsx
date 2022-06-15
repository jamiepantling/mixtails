import { Link } from 'react-router-dom'
import style from "./Header.module.css";

export default function Header(props) {

  return (
    <div className={style.header}>
      <nav id="navbar" className={style.nav}>
        <Link to="/home" className={style.logo} alt="Mixtails Logo"></Link>
        <div className='linksContainer'>
          
          <Link className={style.navLink} to={"/moods"}>Moods</Link>
          <Link className={style.navLink} to={"/cocktails"}>Cocktails</Link>
          <Link className={style.navLink} to={"/flavours"}>Flavas</Link>
          <Link className={style.navLink} to={"/mixtapes"}>Mixtails</Link>
          <Link className={style.navLink} to={"/user"}>Profile</Link>
        </div>
      </nav>
    </div>
  );
}
