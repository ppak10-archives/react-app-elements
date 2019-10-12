/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import NavigationBar from './Navigation';
import {Page} from 'react-app-elements/Template';

// Pages
import {ButtonsPage} from './pages/Buttons';
import Modals from './pages/Modals';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Page>
        <Switch>
          <Route exact path="/">
            Hello World
          </Route>
          <Route path="/buttons" component={ButtonsPage} />
          <Route path="/modals" component={Modals} />
        </Switch>
      </Page>
    </Router>
  );
}
