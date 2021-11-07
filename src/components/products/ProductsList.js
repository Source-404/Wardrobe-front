import ListItem from "./ListItem";
import classes from "./ProductsList.module.css";

const ProductList = (props) => {
  const products = props.items;

  return (
    <ul className={classes.productsList}>
      {products.map((product) => {
        return (
          <ListItem
            key={product.id}
            title={product.title}
            cost={product.cost}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
