import React from "react";

function App() {
  return (
    <>
      <div
        id="container"
        className=" m-10 p-8 grid-rows-3 grid justify-center  content-center items-center text-xl"
      >
        <div className="box">
          <div>write your Todo List</div>
          <div>To Do</div>
        </div>
        <div className="Add">
          <label htmlFor="todo">Add :</label>
          <input type="text" name="todo" />
        </div>
      </div>
    </>
  );
}

export default App;
