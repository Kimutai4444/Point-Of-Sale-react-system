import React, { useState } from "react";
import "./Customermanagement.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function CustomerManagement() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addCustomer = () => {
    if (name.trim() !== "" && email.trim() !== "") {
      const newCustomer = {
        name: name,
        email: email,
      };
      setCustomers([...customers, newCustomer]);
      setName("");
      setEmail("");
    }
  };

  const deleteCustomer = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers.splice(index, 1);
    setCustomers(updatedCustomers);
  };

  const editCustomer = (index, newName, newEmail) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index] = { name: newName, email: newEmail };
    setCustomers(updatedCustomers);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="customer-container">
        <h2>CUSTOMER MANAGEMENT</h2>
        <div>
          <input
            type="text"
            id="cus-btn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter customer name"
          />
          <input
            type="email"
            id="cus-btn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter customer email"
          />
          <button onClick={addCustomer} id="cus-btn">
            Add Customer
          </button>
        </div>
        <div>
          <h3>Customer List:</h3>
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>
                <strong>Name:</strong> {customer.name}, <strong>Email:</strong>{" "}
                {customer.email}
                <button onClick={() => deleteCustomer(index)} id="usr-btn">
                  Delete
                </button>
                <button
                  onClick={() =>
                    editCustomer(
                      index,
                      prompt("Enter new name", customer.name),
                      prompt("Enter new email", customer.email)
                    )
                  }
                  id="usr-btn"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomerManagement;
