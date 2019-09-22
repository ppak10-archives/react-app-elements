/**
 * Navigation.jsx
 * Navigation header component
 */

// Node Modules
import React from 'react';

// Constants
import {STRING, CHILDREN} from './proptypes';

const Bar = ({children}) => {
  return <div className="navigation">{children}</div>;
};

Bar.propTypes = {
  children: CHILDREN,
};

const Logo = ({children}) => <div className="logo">{children}</div>;

Logo.propTypes = {
  children: CHILDREN,
};

const List = ({align, children}) => <div className={align}>{children}</div>;

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
