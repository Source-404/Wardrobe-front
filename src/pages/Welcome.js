import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    //why on earth is this new-user not working
    <section>
      <h1>Submit Query or Build Wardrobe</h1>
      <div className={classes.displayBox}>
        <button>
          <h1>
            <Link to="/products">Submit A Query</Link>
          </h1>
        </button>
        <button>
          <h1>
            <Link to="/products">Build A Wardrobe</Link>
          </h1>
        </button>
      </div>
    </section>
  );
};

export default Welcome;
