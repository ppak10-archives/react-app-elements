/**
 * Navigation.jsx
 * Navigation component
 */

// Node Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Navigation from 'react-app-elements/Navigation';

const Left = () => (
  <>
    <li>
      <Link to="/examples">
        Examples
        <span className="arrow">&#x25BC;</span>
      </Link>
      <ul className="submenu">
        <li>
          <Link to="/examples/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/examples">Example 2</Link>
        </li>
      </ul>
    </li>
    <li>
      <Link to="/buttons">Buttons</Link>
    </li>
    <li>
      <Link to="/fields">
        Fields
        <span className="arrow">&#x25BC;</span>
      </Link>
      <ul className="submenu">
        <li>
          <Link to="/examples">Example 1</Link>
        </li>
        <li>
          <Link to="/examples">Example 2</Link>
        </li>
        <li>
          <Link to="/examples">
            Example 3<span className="arrow">&#x25B6;</span>
          </Link>
          <ul className="nested-submenu">
            <li>
              <Link to="/examples">Nested Example 1</Link>
            </li>
            <li>
              <Link to="/examples">Nested Example 2</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <Link to="/modals">Modals</Link>
    </li>
    <li>
      <Link to="/4">Link 4</Link>
    </li>
  </>
);

// const Right = () => (
//   <>
//     <li>
//       <Link to="/buttons">Buttons</Link>
//     </li>
//     <li>
//       <Link to="/fields">Fields</Link>
//     </li>
//     <li>
//       <Link to="/modals">Modals</Link>
//     </li>
//     <li>
//       <Link to="/4">Link 4</Link>
//     </li>
//   </>
// );

export default function NavigationBar() {
  return (
    <Navigation.Bar>
      {/* <Navigation.Logo>react-app-elements</Navigation.Logo> */}
      <Navigation.List align="left">
        <Left />
      </Navigation.List>
      {/* <Navigation.List align="right">
        <Right />
      </Navigation.List> */}
    </Navigation.Bar>
  );
}
