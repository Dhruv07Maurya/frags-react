import styles from "./Item.module.css";
const Item = ({ fooditem }) => {
  function click(e){
    console.log(fooditem,e,"hello");
  }
  return <li className="list-group-item ">{fooditem}
  <button 
  onClick={click}
  className={styles.button}> Buy</button></li>;
};
export default Item;
