import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="card-wrapper">
      <div className="gender-color-container">
        <div className="gender">Gender: Male</div>
        <div className="color">Color: Black</div>
      </div>
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="content-container">
        <div className="title">{product.title}</div>
        <div className="cost">Cost : {product.price}</div>
      </div>
      <button className="add-cart-btn">
        <Link to="/cart">Add to cart</Link>
      </button>
    </div>
  );
};

export default Card;
