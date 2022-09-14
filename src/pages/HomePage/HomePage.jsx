import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { useMediaQuery } from "react-responsive";

export default function HomePage(props) {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const isMedium = useMediaQuery({ minWidth: 800, maxWidth: 1100 });
  const isBigScreen = useMediaQuery({ minWidth: 1100 });

  return (
    <main>

      <Header setUserInState={props.setUserInState} public={props.public}/>

      {isMobile && (
        <div className={style.cardContainer}>
          <div className={style.intro}>A mixtail is a combination of a playlist and your favourite cocktail</div>
          <Link
            to="/moods"
            className={`${style.cardMobile} ${style.one} ${style.card}`}
          >
            <div className={style.mainPanel}>WATCHA FEELIN'?</div>
            <div className={style.subPanel}>Mixtails by mood</div>
          </Link>
          <Link
            to="/flavours"
            className={`${style.cardMobile} ${style.card} ${style.two}`}
          >
            <div className={style.mainPanel}>Savour the flavour</div>
            <div className={style.subPanel}>Cocktails by flavour profile</div>
          </Link>
        </div>
      )}

      {isMedium && (
        <div className={style.cardContainer}>
          <div className={style.intro}>A mixtail is a combination of a playlist and your favourite cocktail</div>
          <Link
            to="/moods"
            className={`${style.cardMobile} ${style.one} ${style.card}`}
          >
            <div className={style.mainPanel}>WATCHA FEELIN'?</div>
            <div className={style.subPanel}>Mixtails by mood</div>
          </Link>
          <Link
            to="/flavours"
            className={`${style.cardMobile} ${style.card} ${style.two}`}
          >
            <div className={style.mainPanel}>Savour the flavour</div>
            <div className={style.subPanel}>Cocktails by flavour profile</div>
          </Link>
        </div>
      )}

      {isBigScreen && (
        <div className={style.cardContainer}>
          <div className={style.intro}>A mixtail is a combination of a playlist and your favourite cocktail</div>
          <Link
            to="/moods"
            className={`${style.cardMobile} ${style.one} ${style.card}`}
          >
            <div className={style.mainPanel}>WATCHA FEELIN'?</div>
            <div className={style.subPanel}>Mixtails by mood</div>
          </Link>
          <Link
            to="/flavours"
            className={`${style.cardMobile} ${style.card} ${style.two}`}
          >
            <div className={style.mainPanel}>Savour the flavour</div>
            <div className={style.subPanel}>Cocktails by flavour profile</div>
          </Link>
        </div>
      )}
      
    </main>
  );
}
