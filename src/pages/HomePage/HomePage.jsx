import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";

export default function HomePage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <div className={style.cardContainer}>
        <Link to="/moods" className={`${style.card} ${style.one}`}>
          <span>WATCHA FEELIN'?</span>
        </Link>
        <Link to="/flavours" className={`${style.card} ${style.two}`}>
        <span>SAVOUR THE FLAVOUR</span>
        </Link>
      </div>
    </main>
  );
}
