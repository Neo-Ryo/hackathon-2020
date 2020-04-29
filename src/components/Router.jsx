import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MapPage from "./mapPage/MapPage";
import RandomPage from "./randomPage/RandomPage";
import American from "./mapPage/American";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={MapPage} />
        <Route path="/american" component={American} />
        <Route path="/random" component={RandomPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
