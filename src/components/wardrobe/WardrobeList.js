import ListItem from "./ListItem";
import classes from "./WardrobeList.module.css";

const Wardrobe = (props) => {
  const items = props.items;

  return (
    <ul className={classes.productsList}>
      {items.map((product) => {
        return (
          <ListItem
            key={product.ids}
            title={product.name}
            cost={product.price}
          />
        );
      })}
    </ul>
  );
};

export default Wardrobe;
