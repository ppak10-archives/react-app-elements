/**
 * Layout.jsx
 * Layout wrapper components
 */

// Node Modules
import React from 'react';

// Constants
import {CHILDREN, STRING} from '../proptypes';

export function Grid(props) {
  return <section className={props.className}>{props.children}</section>;
}

Grid.defaultProps = {
  className: 'grid-container',
};

Grid.propTypes = {
  className: STRING,
  children: CHILDREN,
};

export function Page(props) {
  return <main className={props.className}>{props.children}</main>;
}

Page.defaultProps = {
  className: 'page-layout',
};

Page.propTypes = {
  children: CHILDREN,
  className: STRING,
};
