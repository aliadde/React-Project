import React from "react";
import Input from "./component/Input.jsx";
import List from "./component/List.jsx";
function App() {
  return (
    <>
      <div
        id="container"
        className=" m-10 p-8 grid-rows-3 grid justify-center  content-center items-center text-xl"
      >
        <Input />
        <List />
      </div>
    </>
  );
}

export default App;
