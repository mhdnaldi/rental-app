import * as actionTypes from "../actionTypes";
import axios from "axios";

// REGISTER
export const registerStart = () => {
  return (dispatch) => {
    dispatch(registerPending());
  };
};
export const registerPending = () => {
  return {
    type: actionTypes.REGISTER_PENDING,
  };
};
export const registerSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    data: data,
  };
};
export const registerFailed = (err) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    response: err,
  };
};

// LOGIN
export const loginStart = () => {
  return (dispatch) => {
    dispatch(loginPending());
  };
};
export const loginPending = () => {
  return {
    type: actionTypes.LOGIN_PENDING,
  };
};
export const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data: data,
  };
};
export const loginFailed = (err) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    response: err,
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
