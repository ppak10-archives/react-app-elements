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
import {Layout, Page} from 'react-app-elements/Template';
import PortfolioPage from './examples/Portfolio';

// Pages
import {ButtonsPage} from './pages/Buttons';
import DashboardExample from './examples/Dashboard';
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
      <Route path="/">
        <Layout>
          <NavigationBar />
          <Page>
            <Route exact path="/">
              <div>Hello World</div>
            </Route>
            <Route path="/buttons">
              <ButtonsPage />
            </Route>
            <Route path="/modals">
              <Modals />
            </Route>
          </Page>
        </Layout>
      </Route>
    </Switch>
  </Router>
);

export default hot(App);
