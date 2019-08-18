/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Components
import {Navigation} from './Navigation';

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="page">Hello world</div>
    </Router>
  );
}
