/**
 * Modal.jsx
 * Modal components
 */

// Node Modules
import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

// Constants
import {CHILDREN, FUNC, STRING} from '../proptypes';

/**
 * Base component to `createPortal` and display modal children
 * @param {*} props
 * @return {Component}
 */
export function Base(props) {
  // Hooks
  const contentRef = useRef(null);

  // Effects
  useEffect(() => {
    const root = document.getElementById('modal');
    let modalParent = null;

    // Creates root element as `modalParent` if not already created, sets `root`
    // to `modalParent` if root element already exists
    if (root === null) {
      modalParent = document.createElement('div');
      modalParent.setAttribute('id', 'modal');
      document.body.insertBefore(
        modalParent,
        document.body.lastElementChild.nextElementSibling,
      );
    } else {
      modalParent = root;
    }

    modalParent.appendChild(contentRef.current);
    modalParent.onclick = props.onClick;
    return () => {
      contentRef.current.remove();
      if (!modalParent.childNodes.length) {
        modalParent.remove();
      }
    };
  }, [props.onClick]);

  // Function to lazy load element for `contentRef` to prevent re-creating
  // element when re-rendering component
  const getModal = () => {
    if (!contentRef.current) {
      contentRef.current = document.createElement('div');
    }
    contentRef.current.onclick = (e) => e.stopPropagation();
    contentRef.current.classList.add(props.className);
    // contentRef.current.onClick = props.onClick;
    return contentRef.current;
  };

  return createPortal(props.children, getModal());
}

Base.defaultProps = {
  className: 'content',
};

Base.propTypes = {
  children: CHILDREN,
  className: STRING,
  onClick: FUNC,
};

export function Example(props) {
  const [show, setShow] = useState(false);

  // JSX
  const modalJSX = show && (
    <Base onClick={() => setShow(false)}>
      <h1>{props.text}</h1>
    </Base>
  );

  return (
    <>
      <button onClick={() => setShow(!show)}>show</button>
      {modalJSX}
    </>
  );
}

Example.propTypes = {
  text: STRING,
};
