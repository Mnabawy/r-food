import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of avaialbe meals
      </p>
      <p>all our meals are cooked with high-qaulity ingredients</p>
    </section>
  );
};

export default MealsSummary;
