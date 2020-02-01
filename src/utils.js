/**
 * utils.js
 * Utility functions used within components
 */

export const classnamesLite = (defaultClassName, params) => {
  let classNamesString = defaultClassName;
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      classNamesString += ` ${key.toString()}`;
    }
  });
  return classNamesString;
};

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
