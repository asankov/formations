import React from "react";
import { Route, Switch } from "react-router-dom";
import FieldPage from "./field/FieldPage";
import InitPage from "./init/InitPage";
import "../styles/init.css";
import "../styles/style.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={InitPage} />
    <Route exact path="/field" component={FieldPage} />
    {/* <Route path="/formation" component={AboutPage} /> */}
  </Switch>
);

export default App;
