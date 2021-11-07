import { useDispatch } from "react-redux";
import { addElement } from "../../actions/index";
import ListItem from "./ListItem";
import classes from "./ProductsList.module.css";

const ProductList = (props) => {
  const products = props.items;
  const dispatch = useDispatch();
  return (
    <ul className={classes.productsList}>
      {products.map((product) => {
        return (
          <>
            <ListItem
              key={product.ids}
              title={product.name}
              cost={product.price}
            />
            <div className={classes.action}>
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    addElement({
                      id: product.ids,
                      name: product.name,
                      price: product.price,
                    })
                  )
                }
              >
                Add!
              </button>
            </div>
          </>
        );
      })}
    </ul>
  );
};

export default ProductList;
