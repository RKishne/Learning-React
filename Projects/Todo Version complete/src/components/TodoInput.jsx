import React, { useState } from "react";

function TodoInput({ handleNewItem }) {
  let [newDataName, setDataName] = useState("");
  let [newDueDate, setDueDate] = useState("");

  const handleDataChange = (event) => {
    console.log(event.target.value)
    setDataName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  };
  const handleAddedButtonClicked = ()=>{
    handleNewItem(newDataName,newDueDate);
    setDataName("");
    setDueDate("");
  }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            
            name="text"
            id="todotext"
            placeholder="Enter your Todo Here"
            value={newDataName}
            onChange={handleDataChange}
          />
        </div>
        <div className="col-4">
          <input type="date" name="date" value={newDueDate} id="date" onChange={handleDateChange}/>
        </div>
        <div className="col-2 add-btn">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddedButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
