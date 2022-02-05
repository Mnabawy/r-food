import React from "react";
import mealImage from "../../assets/food.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image'] }>
        <img src={mealImage} alt="food" />
      </div>
    </>
  );
};

export default Header;
