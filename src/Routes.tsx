import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routes;
