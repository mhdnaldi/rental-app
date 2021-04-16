import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./hooks/Auth/Login/Login";
import Register from "./hooks/Auth/Register/Register";
import Home from "./hooks/Home/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/Register' component={Register} />
    </Switch>
  );
};

export default App;
