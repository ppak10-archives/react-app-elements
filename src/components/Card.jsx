/**
 * Card.jsx
 * Card components
 */

// Node Modules
import React from 'react';
import {COMPONENT, STRING} from '../proptypes';

export function PolaroidCard(props) {
  return (
    <div className={props.className}>
      <img></img>
      <div>Test</div>
    </div>
  );
}

PolaroidCard.defaultProps = {
  className: 'polaroid-card',
};

PolaroidCard.propTypes = {
  children: COMPONENT,
  className: STRING,
};
