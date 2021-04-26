import React from "react";
import BasicRedux from "./basic-redux";
import Todo from "./todo";
import UsingApi from "./using-api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Manu from "./nav-manu";
import DatailApi from "./details-api";

function App() {
  return (
    <Router>
      <Manu />
      <Switch>
        <Route exact path="/basic-redux">
          <BasicRedux />
        </Route>
        <Route path="/normal-todo">
          <Todo />
        </Route>
        <Route exact path="/covid-19">
          <UsingApi />
        </Route>
        <Route path="/covid-19/:state">
          <DatailApi />
        </Route>
        <Redirect to={"/basic-redux"} />
      </Switch>
    </Router>
  );
}

export default App;
