import styles from "./MixtapeList.module.css"

import MixtapeListItem from "../MixtapeListItem/MixtapeListItem"
import { useEffect, useState } from "react";
import * as mixtapesApi from "../../utilities/mixtapes-api";


export default function MixtapeList(props) {


    const [mixtapeList, setMixtapeList] = useState([]);

    useEffect(function () {
      async function fetchMoods() {
        const mixtapes = await mixtapesApi.getMixtapes();
        setMixtapeList(mixtapes);
      }
      fetchMoods();
    }, []);
  
    const mixtapes = mixtapeList.map((mixtape) => (
    <MixtapeListItem key={mixtape._id} {...mixtape} />
    ));


    return (
        <div>
          Mixtape list:
            {mixtapes}
        </div>
    )
}