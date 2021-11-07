import { useState } from "react";

import ProductList from "./ProductsList";
import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "T-shirt",
      cost: "1750",
    },
    {
      id: 2,
      title: "Pants",
      cost: "2499",
    },
  ]);

  return (
    <div className={classes.container}>
      <ProductList items={products} />
    </div>
  );
};

export default Products;
