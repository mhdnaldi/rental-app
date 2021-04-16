import React, { useState } from "react";

import background from "../../../assets/images/auth.png";
import styles from "./Register.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Register = (props) => {
  const [registerForm, setRegisterForm] = useState({
    username: {
      placeholder: "Username",
      type: "text",
      value: "",
    },
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
    confirmPassword: {
      placeholder: "Confirm Password",
      type: "password",
      value: "",
    },
  });

  const inputChangeHandler = (e, id) => {
    const updatedForm = { ...registerForm };
    registerForm[id].value = e.target.value;
    setRegisterForm(updatedForm);
    console.log(registerForm);
  };

  let inputForm = [];
  for (let key in registerForm) {
    inputForm.push({
      id: key,
      config: registerForm[key],
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
    <div className={styles.register}>
      <img src={background} alt='' />
      <div>
        <div className={styles.register__form}>
          <h2>Sign Up</h2>
          <form>
            {inputForm}
            <Button type='submit' class='button'>
              Sign Up
            </Button>
          </form>
          <p>- Or try another way -</p>
          <Button type='button' class='button'>
            Sign Up as Admin
          </Button>
          <Button type='button' class='button button__secondary'>
            Login
          </Button>
        </div>
        <div className={styles.register__footer}>t</div>
      </div>
    </div>
  );
};

export default Register;
