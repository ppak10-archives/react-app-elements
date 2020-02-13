/**
 * Card.jsx
 * Card components
 */

// Node Modules
import React, {useEffect, useRef, useState} from 'react';
import {oneOfType, BOOL, CHILDREN, FUNC, NUMBER, STRING} from '../proptypes';

// Constants
const PX_EM = 16;
const GRID_CELL_SIZE = 2; // Matches that of stylesheet to display properly
const GRID_GAP_SIZE = 2; // Matches that of stylesheet to display properly
const GRID_CELL_GAP_SIZE = PX_EM * (GRID_CELL_SIZE + GRID_GAP_SIZE);
const MAX_SCALE = 1; // Typical range of scale 0.0 to 1.0

// Utils
import {clamp} from '../utils';

export function Polaroid(props) {
  // Hooks
  const imgRef = useRef(null);
  const [gridAreaString, setGridAreaString] = useState(
    `span ${props.spanMin} / span ${props.spanMin}`,
  );
  const [scaleNumber, setScaleNumber] = useState(props.scale);

  // Effects
  useEffect(() => {
    setScaleNumber(props.scale);
  }, [props.scale]);

  useEffect(() => {
    const height =
      (scaleNumber * imgRef.current.naturalHeight) / GRID_CELL_GAP_SIZE;
    const width =
      (scaleNumber * imgRef.current.naturalWidth) / GRID_CELL_GAP_SIZE;
    if (scaleNumber > 0) {
      setGridAreaString(
        `span ${Math.ceil(clamp(height, props.spanMin, props.spanMax))}
        / span ${Math.ceil(clamp(width, props.spanMin, props.spanMax))}`,
      );
    } else {
      setGridAreaString(`span ${props.spanMin} / span ${props.spanMin}`);
    }
  }, [scaleNumber, props.spanMax, props.spanMin, setGridAreaString]);

  // JSX
  const scaleButtonJSX = props.scale === MAX_SCALE || (
    <button
      className="scale-button"
      onClick={() =>
        setScaleNumber(scaleNumber < MAX_SCALE ? MAX_SCALE : props.scale)
      }
    >
      {scaleNumber < MAX_SCALE ? '+' : '-'}
    </button>
  );

  const notificationJSX =
    typeof props.notification === 'function' ? (
      <div className="notification-button">
        <props.notification />
      </div>
    ) : (
      <div className="notification-text">
        {['string', 'number'].includes(typeof props.notification) &&
          props.notification}
      </div>
    );

  return (
    <div className={props.className} style={{gridArea: gridAreaString}}>
      {props.notification !== undefined && notificationJSX}
      <div className="description">
        {props.children || 'Child prop gets rendered here'}
      </div>
      <div className="content">
        {props.showScaleButton && scaleButtonJSX}
        <img ref={imgRef} src={props.src} />
      </div>
    </div>
  );
}

Polaroid.defaultProps = {
  className: 'polaroid-frame',
  scale: 0, // Sets polaroid size to `spanMin` value
  showScaleButton: false,
  spanMin: 5, // Minimum span size of polaroid cards when scale is 0
  spanMax: 30, // Maximum possible span size of polaroid cards at `MAX_SCALE`
  src: `https://www.w3schools.com/tags/smiley.gif`,
};

Polaroid.propTypes = {
  children: CHILDREN,
  className: STRING,
  notification: oneOfType(FUNC, NUMBER, STRING),
  scale: NUMBER,
  showScaleButton: BOOL,
  spanMin: NUMBER,
  spanMax: NUMBER,
  src: STRING,
};
