import React, { useState } from "react";
import "./Inventorymanagement.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState("");
  const [editIndex, setEditIndex] = useState(null); 

  const addItem = () => {
    if (itemName.trim() !== "") {
      setInventory([...inventory, itemName]);
      setItemName("");
    }
  };

  const deleteItem = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
  };

  const editItem = (index, newName) => {
    const updatedInventory = [...inventory];
    updatedInventory[index] = newName;
    setInventory(updatedInventory);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="inventory-containery">
        <h2>INVENTORY MANAGEMENT</h2>
        <div>
          <input
            type="text"
            id="inv-btn"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
          <button onClick={addItem} id="inv-btn">
            Add Item
          </button>
        </div>
        <div>
          <h3>Inventory List:</h3>
          <ul>
            {inventory.map((item, index) => (
              <li key={index}>
                {index === editIndex ? (
                  <>
                    <input
                      id="usr-btn"
                      type="text"
                      value={item}
                      onChange={(e) => editItem(index, e.target.value)}
                    />
                    <button onClick={() => setEditIndex(null)} id="usr-btn">
                      Done
                    </button>
                  </>
                ) : (
                  <>
                    {item}
                    <button onClick={() => deleteItem(index)} id="usr-btn">
                      Delete
                    </button>
                    <button onClick={() => setEditIndex(index)} id="usr-btn">
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InventoryManagement;
