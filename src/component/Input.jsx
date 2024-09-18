import React, { useContext } from "react";
import { Mycontext } from "../context.js";
function Input() {
  const { items, setItems } = useContext(Mycontext);
  // function to change add item todo
  const addItem = (event) => {
    event.preventDefault();
    console.log("another item");
    setItems([...items, `Item ${items.length + 1}`]);
  };
  return (
    <>
      <div className="box-input-submit">
        <div className="box">
          <h1>write your Todo List</h1>
          <div>To Do</div>
        </div>
        <form onSubmit={addItem}>
          <div className="Add">
            <label htmlFor="todo">Add :</label>
            <input type="text" name="todo" className="focus:animate-pulse" />
          </div>
          <button
            type="submit"
            id="sub"
            name="todo"
            className="hover:animate-pulse"
            // onClick={addItem}
          >
            <div className="hover:animate-bounce">submit</div>
          </button>
        </form>
      </div>
      <br />
      {/* List */}
      <div className="list">
        <h2 className="mt-2 mb-6">your List</h2>
        <ul id="parent">
          {items.map((Items, index) => (
            <li key={index} className="px-3 py-2 todos bg-cyan-900">
              {Items}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Input;
