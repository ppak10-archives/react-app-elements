/**
 * Template.jsx
 * Template components
 */

// Node Modules
import React from 'react';

// Constants
import {STRING, CHILDREN} from './js/proptypes';

export function Page(props) {
  return (
    <div className={`rae-page-template ${props.className}`}>
      {props.children}
    </div>
  );
}

Page.propTypes = {
  children: CHILDREN,
  className: STRING,
};
