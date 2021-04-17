import React, { useState } from "react";

import background from "../../../assets/images/auth.png";
import styles from "./Login.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import AuthFooter from "../../../components/Footer/AuthFooter/AuthFooter";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: {
      placeholder: "Email",
      type: "email",
      value: "",
    },
    password: {
      placeholder: "Password",
      type: "password",
      value: "",
    },
  });

  const inputChangeHandler = (e, id) => {
    const updatedForm = { ...loginForm };
    loginForm[id].value = e.target.value;
    setLoginForm(updatedForm);
  };

  let inputForm = [];
  for (let key in loginForm) {
    inputForm.push({
      id: key,
      config: loginForm[key],
    });
  }

  inputForm = inputForm.map((el) => (
    <Input
      key={el.id}
      placeholder={el.config.placeholder}
      type={el.config.type}
      value={el.config.value}
      change={(e) => inputChangeHandler(e, el.id)}
    />
  ));

  return (
    <div className={styles.login}>
      <img src={background} alt='' />
      <div className={styles.login__container}>
        <div className={styles.login__form}>
          <h2>Sign Up</h2>
          <form>
            {inputForm}
            <Button type='submit' class='button'>
              Login
            </Button>
          </form>
          <Button type='button' class='button button__secondary'>
            Sign Up
          </Button>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Login;
