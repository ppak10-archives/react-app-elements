/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

// Components
import {Navigation} from '../package';

export default function App() {
  return (
    <Router>
      <Navigation logo="react-app-elements">
        <Link to="/1">Link 1</Link>
        <Link to="/2">Link 2</Link>
        <Link to="/3">Link 3</Link>
        <Link to="/4">Link 4</Link>
      </Navigation>
      <div className="page">Hello world</div>
    </Router>
  );
}
