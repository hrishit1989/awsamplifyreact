import React from "react";
import "./App.css";
import Test from "./components/TestComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/about" component={Test} />
    </Router>
  );
}

export default App;
