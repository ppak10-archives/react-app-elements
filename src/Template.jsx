/**
 * Template.jsx
 * Template components
 */

// Node Modules
import React, {useState} from 'react';

// Constants
import {BOOLEAN, CHILDREN, FUNCTION, STRING} from './js/proptypes';

export function Layout(props) {
  return <div className={props.className}>{props.children}</div>;
}

Layout.defaultProps = {
  className: 'layout-column',
};

Layout.propTypes = {
  children: CHILDREN,
  className: STRING,
};

export function Page(props) {
  return <main className={props.className}>{props.children}</main>;
}

Page.defaultProps = {
  className: 'page',
};

Page.propTypes = {
  children: CHILDREN,
  className: STRING,
};

export function Sidebar(props) {
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

  return (
    <aside className={`${props.className}-${showBoolean ? 'show' : 'hide'}`}>
      <button className="toggle-button" onClick={onToggle}>
        Expand Sidebar
      </button>
      <div className={`content-${props.side}`}>{props.children}</div>
    </aside>
  );
}

Sidebar.defaultProps = {
  className: 'sidebar-template',
  show: true,
  side: 'left',
};

Sidebar.propTypes = {
  children: CHILDREN,
  className: STRING,
  setShow: FUNCTION,
  show: BOOLEAN,
  side: STRING,
};
