import "bootstrap/dist/css/bootstrap.min.css"
import CalculatorInput from "./components/CalculatorInput"
import CalculatorButtons from "./components/CalculatorButtons"
import './App.css'

function App() {
  let calcbutton = ['C', '1', '2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <center>
      <div className="outerCalculatorlayout">
        <CalculatorInput></CalculatorInput>
        <CalculatorButtons calitems={calcbutton}></CalculatorButtons>
      </div>
    </center>
  )
}

export default App
