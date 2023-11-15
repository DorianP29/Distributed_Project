import "./shop.css";
import React from "react";
import { PRODUCTS } from "./produits";
import { Product } from "./produit";

export const Shop = () => {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>Shop</h1>
    </div>

    <div className="products">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))} 
    </div>
  </div>);

      
}
