import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

require("dotenv").config();

// REDUX DEVTOOLS
const composeEnhancer =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const app = (
  // <Provider>
  <Routes>
    <App />
  </Routes>
  // </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
