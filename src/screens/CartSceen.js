import React from "react";
import { Link } from 'react-router-dom';

const CartSceen = ({ history }) => {
  return (
    <>
      <div className="cart-btn-container">
        <button className="cart-btn">
          <Link to="/">Go Back</Link>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          margin: "200px",
          position: 'absolute'
        }}
      >
        Your cart will display in this screen.
      </div>
    </>
  );
};

export default CartSceen;
