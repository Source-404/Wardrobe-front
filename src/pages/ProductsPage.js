import { Link } from "react-router-dom";
import Products from "../components/products/Products";
import Wardrobe from "../components/wardrobe/Wardrobe";
import classes from "./ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <section>
      <h1>Display User Query here</h1>

      <div className={classes.displayBox}>
        <Products />
        <Wardrobe />
      </div>
    </section>
  );
};

export default ProductsPage;
