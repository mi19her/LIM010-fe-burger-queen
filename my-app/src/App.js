import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Welcome } from './views/welcome.js';
import { Waiter } from './views/waiter.js';

import './css/App.css';

export const App = () => {
  return(
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/waiter">
            <Waiter />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
    </Router>
  );
}

