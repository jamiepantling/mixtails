import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";

export default function HomePage(props) {
  return (
    <div className={style.main}>
      <Header
        setUserInState={props.setUserInState}
        user={props.user}
        public={props.public}
      />
      <div className={style.container}>
        <div className={style.mainTitle}>mixtails</div>
        <div className={style.intro}>
          A mixtail is a combination of a playlist and your favourite cocktail
        </div>
        <Link to="/moods" className={`${style.card} ${style.one}`}>
          <div className={style.mainPanel}>WATCHA FEELIN'?</div>
          <div className={style.subPanel}>Mixtails by mood</div>
        </Link>
        <Link to="/flavours" className={`${style.card} ${style.two}`}>
          <div className={style.mainPanel}>Savour the flavour</div>
          <div className={style.subPanel}>Cocktails by flavour profile</div>
        </Link>
      </div>
    </div>
  );
}
