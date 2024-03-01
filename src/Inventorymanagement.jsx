import React, { useState } from "react";
import "./Inventorymanagement.css"
import Header from "./Header";
import Sidebar from "./Sidebar";

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState("");
  const addItem = () => {
    if (itemName.trim() !== "") {
      setInventory([...inventory, itemName]);
      setItemName("");
    }
  };

    return (
      <>
        <Header />
        <Sidebar/>
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
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
}

export default InventoryManagement;
