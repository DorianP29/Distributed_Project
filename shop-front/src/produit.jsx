import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const Product = (props) => {
  const { id, productName,description, price, productImage,Instock } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  function Available(avail) {
    if (avail=="Disponible") {
      console.log(avail)
      return (<button className="addToCartBttn" onClick={() => addToCart(id)}>
      Add To Cart console.log(avail) {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>);
    }
    return(<p>Non ajoutable</p>)

  }
  return (
    <div className="produit">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p> {price}€</p>
        <p>
          <b>{Instock}</b>
        </p>
      <p>props</p>
      <div>
        <Available avail={Instock} />
      </div>
      </div>
    </div>
  );
};