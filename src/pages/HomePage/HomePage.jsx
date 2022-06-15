import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css"

export default function HomePage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <Link to="/moods" className={style.card1}>
          WATCHA FEELIN'?
      </Link>
      <Link to="/flavours" className={style.card2}>
          SAVOUR THE FLAVOUR
      </Link>
    </main>
  );
}
