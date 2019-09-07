/**
 * Page.jsx
 * Template component to display page
 */

// Node Modules
import React from 'react';

// Constants
import {STRING, CHILDREN} from '../proptypes';

export default function Page(props) {
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
