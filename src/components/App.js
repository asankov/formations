import React from "react";
import { Route, Switch } from "react-router-dom";
import FieldPage from "./field/FieldPage";
import InitPage from "./init/InitPage";
import "../init.css";
import "../style.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={InitPage} />
    <Route exact path="/field" component={FieldPage} />
    {/* <Route path="/formation" component={AboutPage} /> */}
  </Switch>
);

export default App;
