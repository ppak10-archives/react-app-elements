/**
 * Card.jsx
 * Card components
 */

// Node Modules
import React, {useRef, useState} from 'react';
import {CHILDREN, NUMBER, STRING} from '../proptypes';

// Constants
const MIN_SIZE = 5;
const MAX_SIZE = 20;
const GRID_SIZE = 2;
const GRID_GAP = 1;

// Utils
import {clamp} from '../utils';

export function Polaroid(props) {
  const [naturalStyle, setNaturalStyle] = useState();

  const imgRef = useRef(null);
  const onLoadCallback = () => {
    const height = Math.ceil(
      imgRef.current.naturalHeight / 16 / (GRID_SIZE + GRID_GAP),
    );
    const width = Math.ceil(
      imgRef.current.naturalWidth / 16 / (GRID_SIZE + GRID_GAP),
    );
    if (props.scale > 0) {
      setNaturalStyle({
        gridColumn: `span ${clamp(width, MIN_SIZE, MAX_SIZE)}`,
        gridRow: `span ${clamp(height, MIN_SIZE, MAX_SIZE)}`,
        maxWidth: 'max-content',
      });
    }
  };

  return (
    <div className={props.className} style={naturalStyle}>
      <div className="description">
        {props.children || 'Child prop gets rendered here'}
      </div>
      <div className="content">
        <img ref={imgRef} src={props.src} onLoad={onLoadCallback}></img>
      </div>
    </div>
  );
}

Polaroid.defaultProps = {
  className: 'polaroid-frame',
  scale: 0,
  src:
    'https://media.prod.mdn.mozit.cloud/attachments/2019/07/15/16797/4c169938d5f923bfa4db5ee937f24ebe/clock-demo-400px.png',
};

Polaroid.propTypes = {
  children: CHILDREN,
  className: STRING,
  scale: NUMBER,
  src: STRING,
};
