/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

// Components
import Navigation from 'react-app-elements/Navigation';
import {Page} from 'react-app-elements/Templates';

// Pages
import {ButtonsPage} from './pages/Buttons';
import {FieldsPage} from './pages/Fields';

export default function App() {
  return (
    <Router>
      <Navigation logo="react-app-elements">
        <Link to="/buttons">Buttons</Link>
        <Link to="/fields">Fields</Link>
        <Link to="/3">Link 3</Link>
        <Link to="/4">Link 4</Link>
      </Navigation>
      <Page>
        <Switch>
          <Route exact path="/">
            Hello World
          </Route>
          <Route path="/buttons" component={ButtonsPage} />
          <Route path="/fields" component={FieldsPage} />
        </Switch>
      </Page>
    </Router>
  );
}
