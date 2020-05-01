import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MapPage from "./mapPage/MapPage.jsx";
import RandomPage from "./randomPage/RandomPage";
<<<<<<< Updated upstream
=======
// import TestQuiz from "./randomPage/TestQuiz";
import Test4 from "./randomPage/Test4";
>>>>>>> Stashed changes

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={MapPage} />
        <Route path="/random" component={RandomPage} />
<<<<<<< Updated upstream
=======
        {/* <Route path="/test" component={TestQuiz} /> */}
        <Route path="/test4" component={Test4} />
>>>>>>> Stashed changes
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
