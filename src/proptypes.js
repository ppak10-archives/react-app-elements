/**
 * proptypes.js
 * Prop types for react components
 */

// Node Modules
import PropTypes from 'prop-types';

// Base
export const BOOL = PropTypes.bool;
export const COMPONENT = PropTypes.node;
export const FUNC = PropTypes.func;
export const NUMBER = PropTypes.number;
export const STRING = PropTypes.string;

export const oneOfType = (...proptypes) => PropTypes.oneOfType(proptypes);

// React
export const CHILDREN = PropTypes.oneOfType([
  PropTypes.arrayOf(COMPONENT),
  COMPONENT,
]);
