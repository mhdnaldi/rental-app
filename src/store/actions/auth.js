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
  localStorage.setItem("user", JSON.stringify(data.data.result));
  localStorage.setItem("UID", JSON.stringify(data));
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
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("UID");
  return {
    type: actionTypes.LOGOUT,
  };
};

export const checkAuthState = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    if (!token) {
      dispatch(logout());
    } else {
      const uid = localStorage.getItem("UID");
      dispatch(loginSuccess(JSON.parse(uid)));
    }
  };
};

export const patchUserStart = (payload, id) => {
  const formData = new FormData();
  formData.append("images", payload.images);
  formData.append("username", payload.username.value);
  formData.append("address", payload.address.value);
  formData.append("phone", +payload.phone.value);
  formData.append("password", payload.password.value);
  return (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_URL}users/${id}`, formData)
      .then((res) => {
        dispatch(patchUserSuccess(res));
        localStorage.setItem("UID", JSON.stringify(res));
        dispatch(checkAuthState());
      })
      .catch((err) => dispatch(patchUserFailed(err)));
  };
};

export const patchUserSuccess = (payload) => {
  return {
    type: actionTypes.PATCH_USER_SUCCESS,
    user: payload.data.result,
    response: payload.data.message,
  };
};

export const patchUserFailed = (err) => {
  return {
    type: actionTypes.PATCH_USER_FAILED,
    response: err.response.data.message,
  };
};
