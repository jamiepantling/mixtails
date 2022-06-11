import styles from  "./MixtapeListItem.module.css";

export default function MixtapeListItem(props) {
  return <div className={styles.list}>{props.name}</div>;
}
