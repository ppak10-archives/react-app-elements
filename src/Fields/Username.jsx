/**
 * Username.jsx
 * Input field component for username
 */

// Node Modules
import React from 'react';

// Constants
import {STRING} from '../proptypes';

export default function Username(props) {
  return (
    <input className={`rae-username-field ${props.className || ''}`}></input>
  );
}

Username.propTypes = {
  className: STRING,
};
