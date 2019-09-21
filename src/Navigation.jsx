/**
 * Navigation.jsx
 * Navigation header component
 */

// Node Modules
import React from 'react';

// Constants
import {STRING, CHILDREN} from './proptypes';

const Navigation = ({children, logo}) => {
  // Html
  const rightListHtml = children ?
    children.map((child, index) => <li key={index}>{child}</li>) :
    '';

  return (
    <div className="navigation">
      <div className="logo">
        <span>{logo}</span>
      </div>
      {/* <ul>{leftListHtml}</ul> */}
      <ul>{rightListHtml}</ul>
    </div>
  );
};

Navigation.propTypes = {
  children: CHILDREN,
  logo: STRING.isRequired,
};

export default Navigation;
