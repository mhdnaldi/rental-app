import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./hooks/Auth/Login/Login";
import Register from "./hooks/Auth/Register/Register";
import Home from "./hooks/Home/Home";
import Vehicle from "./hooks/Vehicle/Vehicle";
import Profile from "./hooks/Profile/Profile";
import NotFound from "./hooks/404/404";
import * as actions from "./store/index";

import { connect } from "react-redux";

const App = (props) => {
  const { checkAuthState } = props;
  useEffect(() => {
    checkAuthState();
  }, [checkAuthState]);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/vehicle' component={Vehicle} />
      <Route path='/profile' component={Profile} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthState: () => dispatch(actions.checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
