/**
 * Layout.jsx
 * Layout wrapper components
 */

// Node Modules
import React from 'react';

// Constants
import {CHILDREN, STRING} from './js/proptypes';

export function GridLayout(props) {
  return <section className={props.className}>{props.children}</section>;
}

GridLayout.defaultProps = {
  className: 'grid-layout',
};

GridLayout.propTypes = {
  className: STRING,
  children: CHILDREN,
};

export function PageLayout(props) {
  return <main className={props.className}>{props.children}</main>;
}

PageLayout.defaultProps = {
  className: 'page-layout',
};

PageLayout.propTypes = {
  children: CHILDREN,
  className: STRING,
};
