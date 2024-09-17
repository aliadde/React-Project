import React from "react";

function List() {
  return (
    <>
      <div className="list">
        <h2 className="mb-6 mt-2">your List</h2>
        <ul id="parent">
          <li className="todos py-2 px-3 bg-cyan-900">todo1</li>
          <li className="todos py-2 px-3 bg-cyan-900">todo2</li>
          <li className="todos py-2 px-3 bg-cyan-900">todo3</li>
          <li className="todos py-2 px-3 bg-cyan-900">todo4</li>
          <li className="todos py-2 px-3 bg-cyan-900">todo5</li>
        </ul>
      </div>
    </>
  );
}

export default List;
