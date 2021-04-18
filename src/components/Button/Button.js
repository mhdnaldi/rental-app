import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.click} type={props.type} className={props.class}>
      {props.children}
    </button>
  );
};

export default Button;
