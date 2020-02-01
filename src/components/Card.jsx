/**
 * Card.jsx
 * Card components
 */

// Node Modules
import React, {useEffect, useRef, useState} from 'react';
import {CHILDREN, NUMBER, STRING} from '../proptypes';

// Constants
const PX_EM = 16;
const GRID_CELL_SIZE = 2;
const GRID_GAP_SIZE = 1;
const GRID_CELL_GAP_SIZE = GRID_CELL_SIZE + GRID_GAP_SIZE;

// Utils
import {clamp} from '../utils';

export function Polaroid(props) {
  const [gridAreaString, setGridAreaString] = useState(
    `span ${props.spanMin} / span ${props.spanMin}`,
  );

  const imgRef = useRef(null);

  // Effects
  useEffect(() => {
    const height =
      (props.scale * imgRef.current.naturalHeight) / PX_EM / GRID_CELL_GAP_SIZE;
    const width =
      (props.scale * imgRef.current.naturalWidth) / PX_EM / GRID_CELL_GAP_SIZE;
    if (props.scale > 0) {
      setGridAreaString(
        `span ${Math.ceil(clamp(height, props.spanMin, props.spanMax))}
        / span ${Math.ceil(clamp(width, props.spanMin, props.spanMax))}`,
      );
    } else {
      setGridAreaString(`span ${props.spanMin} / span ${props.spanMin}`);
    }
  }, [props.scale, props.spanMax, props.spanMin, setGridAreaString]);

  return (
    <div className={props.className} style={{gridArea: gridAreaString}}>
      <div className="description">
        {props.children || 'Child prop gets rendered here'}
      </div>
      <div className="content">
        <img ref={imgRef} src={props.src}></img>
      </div>
    </div>
  );
}

Polaroid.defaultProps = {
  className: 'polaroid-frame',
  scale: 0,
  spanMin: 5,
  spanMax: 30,
  src: `https://www.w3schools.com/tags/smiley.gif`,
};

Polaroid.propTypes = {
  children: CHILDREN,
  className: STRING,
  scale: NUMBER,
  spanMin: NUMBER,
  spanMax: NUMBER,
  src: STRING,
};
