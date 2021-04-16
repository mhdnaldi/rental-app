import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      className={styles.input}
      autoComplete='off'
      onChange={props.change}
    />
  );
};

export default Input;
