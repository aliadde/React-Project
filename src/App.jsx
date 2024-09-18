import React from "react";
import Input from "./component/Input.jsx";
import { Mycontext } from "./context.js";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState(null);
  return (
    <>
      <Mycontext.Provider value={{ todo, setTodo, items, setItems }}>
        <div
          id="container"
          className="grid items-center content-center justify-center grid-rows-3 gap-8 p-8 m-10 text-xl "
        >
          <Input />
        </div>
      </Mycontext.Provider>
    </>
  );
}

export default App;
