/**
 * Navigation.jsx
 * Navigation header component
 */

// Node Modules
import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => (
  <div className="navigation">
    <div className="logo">
      <span>react-package-template</span>
    </div>
    <ul>
      <li>
        <Link to="/1">Link 1</Link>
      </li>
      <li>
        <Link to="/2">Link 2</Link>
      </li>
      <li>
        <Link to="/3">Link 3</Link>
      </li>
      <li>
        <Link to="/4">Link 4</Link>
      </li>
    </ul>
  </div>
);
