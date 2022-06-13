import MixtapeList from "../../components/MixtapeList/MixtapeList";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

export default function MixtapeDetailPage(props) {
  let [mixtape, setMixtape] = useState({});


  return (
    <main>
      <Header setUserInState={props.setUserInState} />
      <MixtapeList />
    </main>
  );
}
