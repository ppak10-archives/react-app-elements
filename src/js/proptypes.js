/**
 * proptypes.js
 * Prop types for react components
 */

// Node Modules
import PropTypes from 'prop-types';

// Base
export const BOOLEAN = PropTypes.boolean;
export const COMPONENT = PropTypes.node;
export const FUNCTION = PropTypes.func;
export const NUMBER = PropTypes.number;
export const STRING = PropTypes.string;

// React
export const CHILDREN = PropTypes.oneOfType([
  PropTypes.arrayOf(COMPONENT),
  COMPONENT,
]);
