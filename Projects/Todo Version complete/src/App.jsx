import TodoHeading from './components/TodoHeading'
import TodoInput from './components/TodoInput'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoData from './components/TodoData'
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleKeyDown = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
    console.log(todoItems)
  };
  const handleDeleteItem =(todoItemName) =>{
    const newTodoDataItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoDataItem);
  }

  return (
    <>
      <center>
        <TodoHeading />
        <TodoInput handleNewItem={handleKeyDown}></TodoInput>
        <div className="taskentry">
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoData todoContent={todoItems} onDeleteItem={handleDeleteItem}></TodoData>
        </div>
      </center>
    </>
  )
}

export default App
