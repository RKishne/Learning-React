import "bootstrap/dist/css/bootstrap.min.css"
import CalculatorInput from "./components/CalculatorInput"
import CalculatorButtons from "./components/CalculatorButtons"
import './App.css'
import { useState } from "react"

function App() {
  let [calValue,setCalValue] =useState("");
  let onButtonClick = (buttonName) =>{
    if(buttonName === "C"){
      setCalValue("");
    }
    else if (buttonName === "="){
      let result = eval(calValue);
      setCalValue(result);
    }
    else {
      let newDisplayValue = calValue + buttonName;
      setCalValue(newDisplayValue);
    }
  }

  return (
    <center>
      <div className="outerCalculatorlayout">
        <CalculatorInput displayValue={calValue}></CalculatorInput>
        <CalculatorButtons onButtonClick={onButtonClick}></CalculatorButtons>
      </div>
    </center>
  )
}

export default App;
