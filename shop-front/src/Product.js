import React from "react";
import "./Product.css";

const Product = ({ data }) => {
  return (
    <div className="product">
      <h3>{data.name}</h3>
      <img src={data.image_url} alt={data.name} className="product-image" />
      
      
      <p>Price: {data.price}</p>
    </div>
  );
};

export default Product;
//<p>{data.description}</p> 