/**
 * Modal.jsx
 * Modal components
 */

// Node Modules
import React, {useState} from 'react';

// Utils
import {classnamesLite} from './utils';

// Constants
import {CHILDREN, STRING} from './proptypes';

export default function Modal({children, className}) {
  // State
  const [show, setShow] = useState(true);

  // Callbacks
  const onHide = () => {
    setShow(false);
  };

  const onShow = () => {
    setShow(true);
  };

  // Classnames
  const defaultClassName = `modal-background ${className || ''}`;
  const modalClassName = classnamesLite(defaultClassName, {
    hide: !show,
  });

  return (
    <>
      <button onClick={onShow}>Open</button>
      <div className={modalClassName} onClick={onHide}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          Hello World
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  children: CHILDREN,
  className: STRING,
};
