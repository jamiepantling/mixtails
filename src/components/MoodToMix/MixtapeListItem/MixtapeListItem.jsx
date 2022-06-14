import styles from  "./MixtapeListItem.module.css";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";

export default function MixtapeListItem(mixtape) {
  // console.log(mixtape)
  async function deleteMixtape() {
    await mixtapesAPI.deleteMixtape(mixtape._id);
    mixtape.setMixtapeInState(mixtape)
  }
  
  
  
  return <div className={styles.list}>
    {mixtape.name}
    <button onClick={deleteMixtape}>DELETE</button>
    </div>;
}
