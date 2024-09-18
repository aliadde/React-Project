import React, { useContext } from "react";
import { Mycontext } from "../context.js";
function Input() {
  const { array } = useContext(Mycontext);
  return (
    <>
      <div className="box-input-submit">
        <div className="box">
          <h1>write your Todo List</h1>
          <div>To Do</div>
        </div>
        <form>
          <div className="Add">
            <label htmlFor="todo">Add :</label>
            <input type="text" name="todo" className="focus:animate-pulse" />
          </div>
          <button
            type="submit"
            id="sub"
            name="todo"
            className="hover:animate-pulse"
          >
            <div className="hover:animate-bounce">submit</div>
          </button>
        </form>
      </div>
    </>
  );
}

export default Input;
