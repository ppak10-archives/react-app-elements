/**
 * Sidebar.jsx
 * Sidebar components
 */

// Node Modules
import React, {useState} from 'react';

// Constants
import {BOOL, CHILDREN, FUNC, STRING} from '../proptypes';

export function DrawerSidebar(props) {
  // State
  const [showSidebarBoolean, setShowSidebarBoolean] = useState(props.show);

  // Callbacks
  const onToggle = () =>
    typeof props.setShow === 'function' ?
      props.setShow(!props.show) :
      setShowSidebarBoolean(!showSidebarBoolean);

  // Uses either component state or props depending on typeof props.setShow
  const showBoolean =
    typeof props.setShow === 'function' ? props.show : showSidebarBoolean;

  // JSX
  const leftToggleButtonJSX = props.side === 'left' || (
    <button className="toggle-button" onClick={onToggle}>
      {showBoolean ? `›` : `‹`}
    </button>
  );

  const rightToggleButtonJSX = props.side === 'right' || (
    <button className="toggle-button" onClick={onToggle}>
      {showBoolean ? `‹` : `›`}
    </button>
  );

  return (
    <aside className={`${props.className}-${showBoolean ? 'show' : 'hide'}`}>
      {leftToggleButtonJSX}
      <div
        className={`content-${props.side}`}
        onClick={showBoolean ? undefined : onToggle}
      >
        {props.children}
      </div>
      {rightToggleButtonJSX}
    </aside>
  );
}

DrawerSidebar.defaultProps = {
  className: 'sidebar-template',
  show: true,
  side: 'left',
};

DrawerSidebar.propTypes = {
  children: CHILDREN,
  className: STRING,
  setShow: FUNC,
  show: BOOL,
  side: STRING,
};
