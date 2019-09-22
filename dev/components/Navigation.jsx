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
    <Link to="/buttons">Buttons</Link>
    <Link to="/fields">Fields</Link>
    <Link to="/modals">Modals</Link>
    <Link to="/4">Link 4</Link>
  </>
);

const Right = () => (
  <>
    <Link to="/buttons">Buttons</Link>
    <Link to="/fields">Fields</Link>
    <Link to="/modals">Modals</Link>
    <Link to="/4">Link 4</Link>
  </>
);

export default function NavigationBar() {
  return (
    <Navigation.Bar>
      <Navigation.Logo>react-app-elements</Navigation.Logo>
      <Navigation.List align="left">
        <Left />
      </Navigation.List>
      <Navigation.List align="right">
        <Right />
      </Navigation.List>
    </Navigation.Bar>
  );
}
