import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={} />
        <Route path="/random" component={} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
