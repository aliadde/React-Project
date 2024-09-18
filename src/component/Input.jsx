import React, { useContext } from "react";
import { Mycontext } from "../context.js";
function Input() {
  const { todo, setTodo, items, setItems } = useContext(Mycontext);
  // function to change add item todo
  const addItem = (event) => {
    event.preventDefault();
    console.log("another item");
    if (todo != null && todo != "") setItems([...items, `${todo}`]);
    setTodo(null);
  };

  return (
    <>
      <div className="all">
        <div className="head">
          <h1>To Do</h1>
          <h1>write your Todo List</h1>
        </div>
        <form onSubmit={addItem}>
          <div className="Add">
            <label htmlFor="todo">Add :</label>
            <input
              type="text"
              name="todo"
              className="focus:animate-pulse"
              onChange={(event) => setTodo(event.target.value)}
            />
          </div>
          <button
            type="submit"
            id="sub"
            name="todo"
            className="hover:animate-pulse"
            // onClick={addItem}
          >
            <div className="hover:animate-bounce">Add</div>
          </button>
        </form>

        <br />
        {/* List */}
        <div className="list">
          <h2 className="mt-2 mb-6">your List</h2>
          <ul id="parent">
            {items.map((Items, index) => (
              <li key={index} className="px-3 py-2 todos bg-cyan-900">
                <div className="order">
                  <div>{index + 1}</div>
                  <div>{Items}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Input;
