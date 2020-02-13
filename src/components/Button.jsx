/**
 * Button.jsx
 * Button component
 */

// Node Modules
import React from 'react';

// Constants
import {CHILDREN, FUNC, STRING} from '../proptypes';

export function Notification(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Notification.defaultProps = {
  className: 'button-notification',
};

Notification.propTypes = {
  children: CHILDREN,
  className: STRING,
  onClick: FUNC,
};
