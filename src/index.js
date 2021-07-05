import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={} path=""/>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
