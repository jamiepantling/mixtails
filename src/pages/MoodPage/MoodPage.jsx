import MoodList from "../../components/MoodList/MoodList";
import Header from "../../components/Header/Header";

export default function MoodPage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <MoodList />
    </main>
  );
}
