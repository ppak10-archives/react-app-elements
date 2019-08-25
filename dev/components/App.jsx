/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

// Components
import Navigation from 'react-app-elements/Navigation';

// Pages
import {ButtonsPage} from './pages/Button';

export default function App() {
  return (
    <Router>
      <Navigation logo="react-app-elements">
        <Link to="/buttons">Buttons</Link>
        <Link to="/2">Link 2</Link>
        <Link to="/3">Link 3</Link>
        <Link to="/4">Link 4</Link>
      </Navigation>
      <Switch>
        <Route exact path="/">
          Hello World
        </Route>
        <Route path="/buttons" component={ButtonsPage} />
      </Switch>
    </Router>
  );
}
