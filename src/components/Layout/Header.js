import React from "react";
import mealImage from "../../assets/food.jpg";

import "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealImage} />
      </div>
    </>
  );
};

export default Header;
