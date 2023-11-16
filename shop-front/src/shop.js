import React, { useState, useEffect } from "react";
import Product from "./Product"; // Update the import path

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API when the component mounts
    fetch('http://localhost:3001/products') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the fetched products to state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} /> // Ensure you have a unique key for each product
        ))}
      </div>
    </div>
  );
};
