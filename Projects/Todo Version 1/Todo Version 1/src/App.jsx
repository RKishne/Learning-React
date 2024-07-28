import TodoHeading from './components/TodoHeading'
import TodoInput from './components/TodoInput'
import TodoData1 from './components/TodoData1'
import TodoData2 from './components/TodoData2'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  return (
    <>
      <center>
        <TodoHeading />
        <TodoInput></TodoInput>
        <div className="taskentry">
          <TodoData1></TodoData1>
          <TodoData2></TodoData2>
        </div>
      </center>
    </>
  )
}

export default App
