import React, { useEffect } from "react";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="main-container">
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong!!</p>}
      {products &&
        products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
    </div>
  );
};

export default HomeScreen;
