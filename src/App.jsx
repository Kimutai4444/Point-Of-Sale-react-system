import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";
import Usermanagement from "./Usermanagement";
import Sidebar from "./Sidebar";
import Products from "./ProductsCatalog";
import Header from "./Header";
import Inventorymanagement from "./Inventorymanagement";
import Customermanagement from "./Customermanagement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User-Management" element={<Usermanagement />} />
          <Route path="/Products-Catalog" element={<Products />} />
          <Route path="Inventory-management" element={<Inventorymanagement />}/>
          <Route path="Customer-management" element={<Customermanagement />}/>
          {/* <Route path="Inventory-management" element={<Inventorymanagement />}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
