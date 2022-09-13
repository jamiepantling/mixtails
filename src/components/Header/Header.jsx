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
            <Link className={style.titleLink} to="/home">
              mixtails
            </Link>
          </div>

          <div className={style.links}>
            <Link className={style.navLink} to={"/cocktails"}>
              Cocktail list
            </Link>
            {props.public ? (
              <div className={style.authLinksContainer}>
                <Link className={style.authLink} to={"/login"}>
                  Log in
                </Link>
                <Link className={style.authLink} to={"/signup"}>
                  Sign up
                </Link>
              </div>
            ) : (
              <Link className={style.navLink} to={"/user"}>
                Profile
              </Link>
            )}
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
            <Link className={style.titleLinkMobile} to="/home">
              mixtails
            </Link>
          </div>
          <div className={style.links}>
            <Link className={style.navLinkMobile} to={"/cocktails"}>
              cocktails
            </Link>
            {props.public ? (
              <div className={style.authLinksContainer}>
                <Link className={style.authLinkMobile} to={"/login"}>
                  Log in
                </Link>
                <Link className={style.authLinkMobile} to={"/signup"}>
                  Sign up
                </Link>
              </div>
            ) : (
              <Link className={style.navLinkMobile} to={"/user"}>
                Profile
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
