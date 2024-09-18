import React, { useContext } from "react";
import { Mycontext } from "../context.js";
function List() {
  // _______
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };
  // _______
  const { array } = useContext(Mycontext);
  return (
    <>
      <div className="list">
        <h2 className="mt-2 mb-6">your List</h2>
        <button onClick={addItem}>Add Item</button>
        <ul id="parent">
          <li className="px-3 py-2 todos bg-cyan-900">todo1</li>
          <li className="px-3 py-2 todos bg-cyan-900">todo2</li>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
