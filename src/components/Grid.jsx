/**
 * Grid.jsx
 * Grid style component layouts
 */

// Node Modules
import React from 'react';

// Constants
import {CHILDREN, STRING} from '../proptypes';

export function PolaroidContainer(props) {
  return <div className={props.className}>{props.children}</div>;
}

PolaroidContainer.defaultProps = {
  className: 'polaroid-container',
};

PolaroidContainer.propTypes = {
  children: CHILDREN,
  className: STRING,
};
