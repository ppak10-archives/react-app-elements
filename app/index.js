/**
 * index.js
 * Entry file for development environment
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Components
import App from './components/App';

// Styles
import 'react-app-elements-stylesheets';

// Custom app stylesheet overrides
import 'app/stylesheets/main.less';

render(<App />, document.getElementById('root'));
