/**
 * Modal.jsx
 * Modal components
 */

// Node Modules
import React, {useState} from 'react';

// Utils
import {classnamesLite} from './js/utils';

// Constants
import {CHILDREN, STRING} from './js/proptypes';

export default function Modal({children, className}) {
  // State
  const [show, setShow] = useState(false);

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
          {children}
        </div>
      </div>
    </>
  );
}

Modal.defaultProps = {
  children: <div>Render Modal Children Here</div>,
};

Modal.propTypes = {
  children: CHILDREN,
  className: STRING,
};

// export const Header = ({children, className}) => <div></div>;
