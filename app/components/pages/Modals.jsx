/**
 * Modals.jsx
 * Example page for modals
 */

// Node Modules
import React from 'react';

// Components
import {Base} from 'react-app-elements/Modal';

export default function Modals() {
  return (
    <Base>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        hello world
      </div>
    </Base>
  );
}
