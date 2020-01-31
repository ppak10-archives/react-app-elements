/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import NavigationBar from './Navigation';
import {PageLayout} from 'react-app-elements/Layout';
import PortfolioPage from './examples/Portfolio';

// Pages
import {ButtonsPage} from './pages/Buttons';
import DashboardExample from './examples/Dashboard';
import GridExample from './examples/Grid';
import Modals from './pages/Modals';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/examples">
        <PortfolioPage />
      </Route>
      <Route path="/examples/dashboard">
        <DashboardExample />
      </Route>
      <Route path="/examples/grid">
        <GridExample />
      </Route>
      <Route path="/">
        <div className="app">
          <NavigationBar />
          <PageLayout>
            <Route exact path="/">
              <div>Hello World</div>
            </Route>
            <Route path="/buttons">
              <ButtonsPage />
            </Route>
            <Route path="/modals">
              <Modals />
            </Route>
          </PageLayout>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default hot(App);
