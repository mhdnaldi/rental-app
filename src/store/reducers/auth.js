import * as actionTypes from "../actionTypes";

const initialState = {
  token: null,
  response: null,
  loading: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_PENDING:
      return { ...state, loading: true };
    case actionTypes.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.REGISTER_FAILED:
      return { ...state, loading: false, response: action.error };
    case actionTypes.LOGIN_PENDING:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.LOGIN_FAILED:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
};

export default authReducers;
