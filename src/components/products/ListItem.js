import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.container}>
      <h2>{props.title}</h2>
      <p>{props.cost}</p>
    </div>
  );
};

export default ListItem;
