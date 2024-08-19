import styles from "../App.module.css";
function Butts({ but,clk}) {
  return (
    <>
      {but.map((but) => (
        <button onClick={()=>clk(but)} key={but}>{but}</button>
      ))}
    </>
  );
}

export default Butts;
