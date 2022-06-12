import Header from "../../components/Header/Header";
import style from "./HomePage.module.css"

export default function HomePage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <a href={"/moods"}className={style.card}>
          What are you feeling like?
      </a>
      <a href={"/flavours"} className={style.card}>
          Savor the Flavour
      </a>
    </main>
  );
}
