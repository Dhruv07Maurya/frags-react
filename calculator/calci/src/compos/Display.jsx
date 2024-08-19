import styles from "../App.module.css";
function Display({dispv}) {
    return <input className={styles.input} value={dispv} readOnly/>
}
export default Display;
