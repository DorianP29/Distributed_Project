export const Product = (props) => {
  const { id, productName,description, price, productImage,Instock } = props.data;

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
      </div>
    </div>
  );
};