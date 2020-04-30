import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MapPage from "./mapPage/MapPage.jsx";
import RandomPage from "./randomPage/RandomPage";
import TestQuiz from "./randomPage/TestQuiz";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={MapPage} />
        <Route path="/random" component={RandomPage} />
        <Route path="/test" component={TestQuiz} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
