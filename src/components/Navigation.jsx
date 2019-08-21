/**
 * Navigation.jsx
 * Navigation header component
 */

// Node Modules
import React from 'react';

// Constants
import {STRING, CHILDREN} from '../constants/proptypes';

export const Navigation = ({children, logo}) => {
  // Html
  const listHtml = children
    ? children.map((child, index) => <li key={index}>{child}</li>)
    : '';

  return (
    <div className="navigation">
      <div className="logo">
        <span>{logo}</span>
      </div>
      <ul>{listHtml}</ul>
    </div>
  );
};

Navigation.propTypes = {
  children: CHILDREN,
  logo: STRING.isRequired,
};
