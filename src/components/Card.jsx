/**
 * Card.jsx
 * Card components
 */

// Node Modules
import React, {useRef, useState} from 'react';
import {CHILDREN, STRING} from '../proptypes';

// Constants
const MIN_SIZE = 7; // 3em
const GRID_SIZE = 1; // 1em

export function Polaroid(props) {
  const [naturalStyleObject, setNaturalStyleObject] = useState({
    'grid-column': 'span 4',
    'grid-row': 'span 4',
  });

  const imgRef = useRef(null);
  const onLoadCallback = () => {
    const height = Math.ceil(imgRef.current.naturalHeight / 16 / GRID_SIZE);
    const width = Math.ceil(imgRef.current.naturalWidth / 16 / GRID_SIZE);
    // console.log('call', imgRef, height, width)
    setNaturalStyleObject({
      'grid-column': `span ${Math.max(MIN_SIZE, width)}`,
      'grid-row': `span ${Math.max(MIN_SIZE, height)}`,
    });
  };

  return (
    <div className={props.className} style={naturalStyleObject}>
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
  src:
    'https://media.prod.mdn.mozit.cloud/attachments/2019/07/15/16797/4c169938d5f923bfa4db5ee937f24ebe/clock-demo-400px.png',
};

Polaroid.propTypes = {
  children: CHILDREN,
  className: STRING,
  src: STRING,
};
