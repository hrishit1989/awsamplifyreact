import React from "react";
import "./App.css";
import Test from "./components/TestComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route
        path="/about"
        render={() => <h3>Select a task from left to view</h3>}
      />
    </Switch>
  );
}

export default App;
