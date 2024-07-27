import React from "react";

function TodoData2() {
    let TaskName = "Go to College";
    let TaskDate = new Date().toJSON().slice(0, 10);
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
            <p>{TaskName}</p>
        </div>
        <div className="col-4">
          <p>{TaskDate}</p>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoData2;
