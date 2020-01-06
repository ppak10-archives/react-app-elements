/**
 * Template.jsx
 * Template components
 */

// Node Modules
import React from 'react';

// Constants
import {STRING, CHILDREN} from './js/proptypes';

export function Page(props) {
  return <div className={`page ${props.className}`}>{props.children}</div>;
}

Page.propTypes = {
  children: CHILDREN,
  className: STRING,
};
