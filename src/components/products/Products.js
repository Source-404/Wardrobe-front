import { useState, useEffect } from "react";

import ProductList from "./ProductsList";
import classes from "./Products.module.css";

const Products = (props) => {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);
  console.log(products);

  const getProducts = async () => {
    const data = await fetch("http://localhost:5000/productdata", {
      method: "GET",
    });
    const resData = await data.json();
    //setProducts()
    setProducts(resData);
  };

  return (
    <div className={classes.container}>
      <ProductList items={products} />
    </div>
  );
};

export default Products;
