import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import background from "../../../assets/images/auth.png";
import styles from "./Login.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import AuthFooter from "../../../components/Footer/AuthFooter/AuthFooter";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "../../../components/Modal/Modal";
import * as actions from "../../../store/index";

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

  const history = useHistory();

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

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.loginStart(loginForm);
  };

  return (
    <>
      {props.response && <Modal>{props.response}</Modal>}
      <div className={styles.login}>
        <img src={background} alt='' />
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h2>Login</h2>
            <form onSubmit={submitFormHandler}>
              {inputForm}
              <Button type='submit' class='button'>
                {props.loading ? <CircularProgress /> : "Login"}
              </Button>
            </form>
            <Button
              click={() => history.push("/register")}
              type='button'
              class='button button__secondary'>
              Sign Up
            </Button>
          </div>
          <AuthFooter />
        </div>
      </div>
      {props.user && <Redirect to='/' />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.auth.response,
    loading: state.auth.loading,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginStart: (payload) => dispatch(actions.loginStart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
