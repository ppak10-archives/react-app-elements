/**
 * Button.jsx
 * Button component
 */

// Node Modules
import React from 'react';

// Constants
import {COMPONENT, STRING} from '../proptypes';

const Button = (props) => {
  return (
    <button className={`button ${props.className}`}>{props.children}</button>
  );
};

Button.propTypes = {
  children: COMPONENT,
  className: STRING,
};

export default Button;
