import { Link } from "react-router-dom";
import Products from "../components/products/Products";

const ProductsPage = () => {
  return (
    <section>
      <h1>Display list of items here</h1>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/3">A Burger</Link>
        </li>
      </ul>
      <Products />
    </section>
  );
};

export default ProductsPage;
