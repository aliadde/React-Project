import React from "react";

function Input() {
  return (
    <>
     
        <div className="box">
          <div>write your Todo List</div>
          <div>To Do</div>
        </div>
        <div className="Add">
          <label htmlFor="todo">Add :</label>
          <input type="text" name="todo" />
        </div>

    </>
  );
}

export default Input;
