/**
 * index.js
 * Entry file for development server
 */

// Node Modules
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Config
import {PORT} from 'config';
import webpackConfig from '../webpack.config';

const app = express();
const compiler = webpack(webpackConfig);

app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static('public'));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public', 'index.html')),
);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.info('Development app running on port 3000'));
