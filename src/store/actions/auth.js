import * as actionTypes from "../actionTypes";
import axios from "axios";

// CLEAR STATE
export const clearState = () => {
  return {
    type: actionTypes.CLEAR_STATE,
  };
};

// REGISTER
export const registerStart = (payload, role) => {
  let data = {
    username: payload.username.value,
    email: payload.email.value,
    password: payload.password.value,
    confirm_password: payload.confirm_password.value,
    role,
  };
  return (dispatch) => {
    dispatch(registerPending());
    axios
      .post(`${process.env.REACT_APP_URL}users/register`, data)
      .then((res) => dispatch(registerSuccess(res)))
      .catch((err) => dispatch(registerFailed(err)));
  };
};
export const registerPending = () => {
  return {
    type: actionTypes.REGISTER_PENDING,
  };
};
export const registerSuccess = (payload) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    response: payload.data.message,
  };
};
export const registerFailed = (err) => {
  return {
    type: actionTypes.REGISTER_FAILED,
    response: err.response.data.message,
  };
};

// LOGIN
export const loginStart = (payload) => {
  let data = {
    email: payload.email.value,
    password: payload.password.value,
  };
  return (dispatch) => {
    dispatch(loginPending());
    axios
      .post(`${process.env.REACT_APP_URL}users/login`, data)
      .then((res) => dispatch(loginSuccess(res)))
      .catch((err) => dispatch(loginFailed(err)));
  };
};
export const loginPending = () => {
  return {
    type: actionTypes.LOGIN_PENDING,
  };
};
export const loginSuccess = (data) => {
  localStorage.setItem("token", data.data.result.token);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user: data.data.result,
  };
};
export const loginFailed = (err) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    response: err.response.data.message,
  };
};

// LOGOUT & CHECK STATE
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const checkAuthState = () => {
  return {
    type: actionTypes.CHECK_AUTH_STATE,
  };
};
