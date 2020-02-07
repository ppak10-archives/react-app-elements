/**
 * Modal.jsx
 * Modal components
 */

// Node Modules
import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

// Constants
import {CHILDREN, STRING} from '../proptypes';

export function Base(props) {
  // Hooks
  const modalRef = useRef(null);

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
    modalRef.current.classList.add(props.className);
    return modalRef.current;
  };

  return createPortal(props.children, getModal());
}

Base.defaultProps = {
  className: 'modal-base',
};

Base.propTypes = {
  children: CHILDREN,
  className: STRING,
};
