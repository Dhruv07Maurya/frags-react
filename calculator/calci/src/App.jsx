import { useState } from "react";
import styles from "./App.module.css";
import Display from "./compos/Display";
import Butts from "./compos/Butts";

function App() {
  const buttNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    "=",
    ".",
  ];

  let [calcv, setcalcv] = useState("");
  const btnClick = (buttonText) => {
    if (buttonText === "c") {
      setcalcv("");
    } else if (buttonText == "=") {
      let res = eval(calcv);
      setcalcv(res);
    } else {
      const neww = calcv + buttonText;
      setcalcv(neww);
    }
  };

  return (
    <>
      <div className={styles.calci}>
        <h1>Calculator</h1>
        <Display dispv={calcv}></Display>
        <br />
        <div className={styles.btn}>
          <Butts but={buttNames} clk={btnClick}></Butts>
        </div>
      </div>
    </>
  );
}

export default App;
