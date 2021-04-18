import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./hooks/Auth/Login/Login";
import Register from "./hooks/Auth/Register/Register";
import Home from "./hooks/Home/Home";
import NotFound from "./hooks/404/404";

import { connect } from "react-redux";

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {props.token ? (
        <Redirect to='/' />
      ) : (
        <Route exact path='/login' component={Login} />
      )}
      {props.token ? (
        <Redirect to='/' />
      ) : (
        <Route exact path='/register' component={Register} />
      )}
      <Route path='/404' component={NotFound} />
      <Redirect to='/404' />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(App);
