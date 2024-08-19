import Item from "./Item";
const Fooditems = ({ itemm }) => {
  return (
    <ul className="list-group">
      {itemm.map((item) => (
        <Item key={item} fooditem={item}></Item>
      ))}
    </ul>
  );
};
export default Fooditems;
