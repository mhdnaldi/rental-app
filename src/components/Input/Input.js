import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <label className={props.labelStyle}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        className={`${styles.input} ${props.className}`}
        autoComplete='off'
        onChange={props.change}
      />
    </>
  );
};

export default Input;
