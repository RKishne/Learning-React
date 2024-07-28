import React from 'react'

function TodoInput() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control" name="text" id="todotext" placeholder='Enter your Todo Here' />
                </div>
                <div className="col-4">
                    <input type="date" className="form-control" name="date" id="date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        </div>
    )
}

export default TodoInput
