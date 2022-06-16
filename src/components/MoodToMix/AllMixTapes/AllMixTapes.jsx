import style from "./AllMixtapeList.module.css"
import MixtapeListItem from "../MixtapeListItem/MixtapeListItem"
import { useEffect, useState } from "react";
import * as mixtapesApi from "../../../utilities/mixtapes-api";
import Header from "../../Header/Header";


export default function MixtapeList(props) {


    const [mixtapeList, setMixtapeList] = useState([]);

    useEffect(function () {
      async function fetchMixtapes() {
        const mixtapes = await mixtapesApi.getMixtapes();
        setMixtapeList(mixtapes);
      }
      fetchMixtapes();
    }, []);
  
    const mixtapes = mixtapeList.map((mixtape) => (
        <MixtapeListItem key={mixtape._id} mixtape={mixtape} />
        ));


    return (
        <div className={style.content}>
          <Header></Header>
          <h1>All Mixtapes:</h1>
            {mixtapes}
        </div>
    )
}