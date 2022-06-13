import Header from "../../components/Header/Header";
import style from "./HomePage.module.css"
import { Link } from 'react-router-dom'

export default function HomePage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <Link to="/moods" className={style.card}>
          What are you feeling like?
      </Link>
      <Link to="/flavours" className={style.card}>
          Savor the Flavour
      </Link>
    </main>
  );
}
