import React from 'react'
import TodoItem from './TodoItem';

function TodoData({todoContent,onDeleteItem}) {
    
  return (
    
    <div className="container text-center">
    {todoContent.map((item) => (
      <TodoItem
      key ={item}
        todoDate={item.dueDate}
        todoName={item.name}
        onDeleteItem={onDeleteItem}
      ></TodoItem>
    ))};
  </div>
  );
}

export default TodoData;