import React from "react";
import styles from "./Popular.module.css";
import Card from "../Card/Card";
import home1 from "../../assets/images/home1.png";
import home2 from "../../assets/images/home2.png";
import home3 from "../../assets/images/home3.png";
import home4 from "../../assets/images/home4.png";

const Popular = (props) => {
  return (
    <div className={styles.popular__section}>
      <h2>Popular In Town</h2>
      <div className={styles.popular__list}>
        <Card image={home1} title='Merapi' text='Yogyakarta' />
        <Card image={home2} title='Danau Toba' text='Prapat' />
        <Card image={home3} title='Bromo' text='Malang' />
        <Card image={home4} title='Malioboro' text='Yogyakarta' />
      </div>
    </div>
  );
};

export default Popular;
