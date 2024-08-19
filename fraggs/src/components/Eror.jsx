import Fooditems from "./Fooditems";

const Eror = ({ itemm }) => {
  return <>{itemm.length === 0 && <h3>enter the quantity</h3>}</>;
};
export default Eror;
