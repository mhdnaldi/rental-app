import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import background from "../../../assets/images/auth.png";
import styles from "./Register.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import AuthFooter from "../../../components/Footer/AuthFooter/AuthFooter";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "../../../components/Modal/Modal";
import * as actions from "../../../store/index";

const Register = (props) => {
  const history = useHistory();
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
    confirm_password: {
      placeholder: "Confirm Password",
      type: "password",
      value: "",
    },
  });

  const inputChangeHandler = (e, id) => {
    const updatedForm = { ...registerForm };
    registerForm[id].value = e.target.value;
    setRegisterForm(updatedForm);
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

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.registerStart(registerForm, 0);
  };

  const registerAdminHandler = () => {
    props.registerStart(registerForm, 1);
  };

  return (
    <>
      {props.response && <Modal>{props.response}</Modal>}
      <div className={styles.register}>
        <img src={background} alt='' />
        <div className={styles.register__container}>
          <div className={styles.register__form}>
            <h2>Sign Up</h2>
            <form onSubmit={submitFormHandler}>
              {inputForm}
              <Button type='submit' class='button'>
                {!props.loading ? (
                  "Sign Up"
                ) : (
                  <CircularProgress color='danger' />
                )}
              </Button>
            </form>
            <p>- Or try another way -</p>
            <Button
              click={() => registerAdminHandler()}
              type='button'
              class='button'>
              Sign Up as Admin
            </Button>
            <Button
              click={() => history.push("/login")}
              type='button'
              class='button button__secondary'>
              Login
            </Button>
          </div>
          <AuthFooter />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.auth.response,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerStart: (payload, role) =>
      dispatch(actions.registerStart(payload, role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
