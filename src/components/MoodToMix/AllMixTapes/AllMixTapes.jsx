import styles from "./AllMixtapeList.module.css"
import { Link } from 'react-router-dom'
import MixtapeListItem from "../MixtapeListItem/MixtapeListItem"
import { useEffect, useState } from "react";
import * as mixtapesApi from "../../../utilities/mixtapes-api";


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
        // <Link to={`/mixtapes/${mixtape._id}`} ><MixtapeListItem key={mixtape._id} {...mixtape} /></Link>
        <div>
          {mixtape.name}
        </div>
        ));


    return (
        <div>
          Mixtape list:
            {mixtapes}
        </div>
    )
}