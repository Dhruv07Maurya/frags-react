import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import Eror from "./components/Eror";
import Container from "./Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";

function App() {
  // let fooditems = ["hedsdlo", "my", "name", "is", "unknown"];
  let [fooditems, setfooditedms] = useState([
    "hello",
    "my",
    "name",
    "is",
    "unknown",
  ]);
  // let [txttoshow,settxttoshow]=useState()
  function onKeyDown(e) {
    // settxttoshow(e.target.value)
    console.log(e.key);
    if (e.key === "Enter") {
      let s = e.target.value;
      e.target.value = "";
      setfooditedms([...fooditems, s]);
      // setfooditedms(s)
    }
  }
  return (
    <>
      <Container>
        <h1>hello</h1>
        <Foodinput update={onKeyDown}></Foodinput>
        <h3>hello</h3>
        <Eror itemm={fooditems}></Eror>
        <Fooditems itemm={fooditems}></Fooditems>
      </Container>
    </>
  );
}

export default App;
