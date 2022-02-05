import React from "react";
import mealImage from "../../assets/food.jpg";

import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="food" />
      </div>
    </>
  );
};

export default Header;
