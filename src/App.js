import React from "react";
import BasicRedux from "./basic-redux";
import Todo from "./todo";
import UsingApi from "./using-api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Manu from "./nav-manu";

function App() {
  return (
    <Router>
      <Manu />
      <Switch>
        <Route exact path="/">
          <BasicRedux />
        </Route>
        <Route path="/normal-todo">
          <Todo />
        </Route>
        <Route path="/Covid-19">
          <UsingApi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
