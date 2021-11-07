import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destination">
          <Destination />
        </Route>
        <Route exact path="/crew">
          <Crew />
        </Route>
        <Route exact path="/technology">
          <Technology />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
