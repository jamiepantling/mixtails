import { Link } from 'react-router-dom'
import style from "./Header.module.css";

export default function Header(props) {

  return (
    <div className={style.header}>
      <nav id="navbar" className={style.nav}>
        <Link to="/home" className={style.logo} alt="Mixtails Logo"><span>MixTails</span></Link>
        <div className='linksContainer'>
          
          
          <Link className={style.navLink} to={"/cocktails"}>All cocktails</Link>
          <Link className={style.navLink} to={"/mixtapes"}>All mixtails</Link>
          <Link className={style.navLink} to={"/user"}>Profile</Link>
        </div>
      </nav>
    </div>
  );
}
