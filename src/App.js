import React from "react";
import "./App.css";
import Test from "./components/TestComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route
        path="/about"
        render={() => <h3>Select a task from left to view</h3>}
      />
    </Router>
  );
}

export default App;
