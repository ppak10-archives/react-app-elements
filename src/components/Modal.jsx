/**
 * Modal.jsx
 * Modal components
 */

// Node Modules
import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

// Constants
import {BOOL, CHILDREN, STRING} from '../proptypes';

/**
 * Base component to `createPortal` and display modal children
 * @param {*} props
 * @return {Component}
 */
export function Base(props) {
  // Hooks
  const modalRef = useRef(null);

  // Effects
  useEffect(() => {
    if (modalRef.current !== null) {
      if (
        modalRef.current.classList.contains(`${props.className}-show`) &&
        !props.show
      ) {
        modalRef.current.classList.remove(`${props.className}-show`);
        modalRef.current.classList.add(`${props.className}-hide`);
      } else if (
        modalRef.current.classList.contains(`${props.className}-hide`) &&
        props.show
      ) {
        modalRef.current.classList.remove(`${props.className}-hide`);
        modalRef.current.classList.add(`${props.className}-show`);
      }
    }
  }, [props.className, props.show]);

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

    modalParent.appendChild(modalRef.current);
    return () => {
      modalRef.current.remove();
      if (!modalParent.childNodes.length) {
        modalParent.remove();
      }
    };
  }, []);

  // Function to lazy load element for `modalRef` to prevent re-creating element
  // when re-rendering component
  const getModal = () => {
    if (!modalRef.current) {
      modalRef.current = document.createElement('div');
    }
    modalRef.current.classList.add(
      `${props.className}-${props.show ? 'show' : 'hide'}`,
    );
    return modalRef.current;
  };

  return createPortal(props.children, getModal());
}

Base.defaultProps = {
  className: 'modal-base',
  show: false,
};

Base.propTypes = {
  children: CHILDREN,
  className: STRING,
  show: BOOL,
};

export function Toggle(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>show</button>
      <Base show={show}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          hello world
        </div>
      </Base>
    </>
  );
}
