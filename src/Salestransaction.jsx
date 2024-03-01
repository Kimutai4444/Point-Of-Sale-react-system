import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Salestransaction.css"

function Salestransaction() {
    return (
        <>
            <Header />
            <Sidebar/>
        <div className="sales-transaction-container">
          <h2>Sales and Transactions</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {(transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.product}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.transactionId}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Salestransaction;
