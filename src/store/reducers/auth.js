import * as actionTypes from "../actionTypes";

const initialState = {
  token: null,
  response: null,
  loading: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_STATE:
      return {
        ...state,
        response: null,
      };
    case actionTypes.REGISTER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    default:
      return state;
  }
};

export default authReducers;
