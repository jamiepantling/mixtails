import styles from  "./MixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";
import { Link } from 'react-router-dom'

export default function MixtapeListItem(mixtape) {

  async function deleteMixtape() {
    await mixtapesAPI.deleteMixtape(mixtape._id);
    mixtape.setMixtapeInState(mixtape)
  }
    
  return <div className={styles.list}>
    <Link to={`/mixtapes/${mixtape._id}`}>{mixtape.name}</Link>
    <button onClick={deleteMixtape}>DELETE</button>
    </div>;
}
