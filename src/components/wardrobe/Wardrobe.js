import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import WardrobeList from "./WardrobeList";
import classes from "./Wardrobe.module.css";

const Wardrobe = (props) => {
  const wardrobe = useSelector((state) => state.updateList);

  // const [wardrobe, setWardrobe] = useState([
  //   {
  //     id: 2,
  //     title: "Pants",
  //     cost: "2499",
  //   },
  // ]);

  console.log(wardrobe);

  return (
    <div className={classes.container}>
      <WardrobeList items={wardrobe} />
    </div>
  );
};

export default Wardrobe;
