import React from "react";
import styles from "./Card.module.css";
import one from "../../assets/images/auth.png";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={one} alt='' />
      <div className={styles.card__details}></div>
    </div>
  );
};

export default Card;
