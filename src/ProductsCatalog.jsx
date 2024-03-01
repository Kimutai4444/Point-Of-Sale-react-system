import React, { useState } from "react";
import './ProductsCatalog.css'
import Header from "./Header";
import Sidebar from "./Sidebar";

function ProductsCatalog() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      description: "My Product 1",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      description: "My product 2",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      description: "My Product 3",
      imageUrl:
        "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      description: "My Product 3",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
  ]);

  return (
    <>
      <Header />
      <Sidebar/>
      <div className="products-catalog">
        <h3>PRODUCTS CATALOG</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              <p>Price: ${product.price}</p>
              <p> {product.description}</p>
              <button id="productsBtn">Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductsCatalog;
