/**
 * Card.jsx
 * Card components
 */

// Node Modules
import React from 'react';
import {CHILDREN, STRING} from '../proptypes';

export function Polaroid(props) {
  return (
    <div className={props.className}>
      <div className="content">
        <img src={props.src}></img>
      </div>
      <div className="description">
        {props.children || 'Child prop gets rendered here'}
      </div>
    </div>
  );
}

Polaroid.defaultProps = {
  className: 'polaroid-frame',
  src:
    'https://media.prod.mdn.mozit.cloud/attachments/2019/07/15/16797/4c169938d5f923bfa4db5ee937f24ebe/clock-demo-400px.png',
};

Polaroid.propTypes = {
  children: CHILDREN,
  className: STRING,
  src: STRING,
};
