import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        {props.image ? <img src={props.image} alt='' /> : "NO PHOTO"}
      </div>
      <div className={styles.card__details}>
        <p>{props.title}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
