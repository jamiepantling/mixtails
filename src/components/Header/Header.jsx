import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useMediaQuery } from "react-responsive";

export default function Header(props) {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const isDesktop = useMediaQuery({ minWidth: 800 });

  return (
    <div>
      {isDesktop && (
        <nav id="navbar" className={style.nav}>
          <div className={style.logoTitleContainer}>
            <Link to="/home">
              <img
                src="/cocktailLogo.png"
                className={style.logo}
                alt="Mixtails Logo"
              />
            </Link>
            <Link className={style.navLink} to="/home">
              MixTails
            </Link>
          </div>

          <div className={style.links}>
            <Link className={style.navLink} to={"/cocktails"}>
              Cocktails
            </Link>
            <Link className={style.navLink} to={"/user"}>
              Profile
            </Link>
          </div>
        </nav>
      )}
      {isMobile && (
        <nav id="navbar" className={style.nav}>
          <div className={style.logoTitleContainer}>
            <Link to="/home">
              <img
                src="/cocktailLogo.png"
                className={style.logo}
                alt="Mixtails Logo"
              />
            </Link>
            <Link className={style.navLinkMobile} to="/home">
              MixTails
            </Link>
          </div>
          <div className={style.links}>
            <Link className={style.navLinkMobile} to={"/cocktails"}>
              cocktails
            </Link>
            <Link className={style.navLinkMobile} to={"/user"}>
              Profile
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
