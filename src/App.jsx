import React, { useContext } from "react";
import Input from "./component/Input.jsx";
import List from "./component/List.jsx";
import Mycontext from "./context.js";

function App() {
  const array = ["shopping", "jugging"];
  return (
    <>
      <Mycontext.provider value={{ array }}>
        <div
          id="container"
          className="grid items-center content-center justify-center grid-rows-3 gap-8 p-8 m-10 text-xl "
        >
          <Input />
          <br />
          <List />
        </div>
      </Mycontext.provider>
    </>
  );
}

export default App;
