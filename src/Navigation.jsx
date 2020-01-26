/**
 * Navigation.jsx
 * Navigation header component
 */

// Node Modules
import React from 'react';

// Constants
import {CHILDREN, STRING} from './js/proptypes';

const Bar = ({children, className}) => {
  return <nav className={className}>{children}</nav>;
};

Bar.defaultProps = {
  className: 'navigation-bar',
};

Bar.propTypes = {
  children: CHILDREN,
  className: STRING,
};

const Logo = ({children}) => <div className="logo">{children}</div>;

Logo.propTypes = {
  children: CHILDREN,
};

// const List = ({align, children}) => <ul className={align}>{children}</ul>;
const List = ({align, children}) => <ul>{children}</ul>;

List.propTypes = {
  align: STRING,
  children: CHILDREN,
};

List.defaultProps = {
  align: 'center',
};

export default {
  Bar,
  List,
  Logo,
};
