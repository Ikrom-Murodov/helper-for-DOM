// Core
import DevServer from 'webpack-dev-server';
import Webpack from 'webpack';
import chalk from 'chalk';

// Configuration file for development mode
import getDevConfig from './config/webpack.dev';

// Constans
import { HOST, PORT, BUILD_DIRECTORY } from './constans';

// Compolation webpack
const compiler = Webpack(getDevConfig());

// Server
const server = new DevServer(compiler, {
  contentBase: BUILD_DIRECTORY,
  host: HOST,
  port: PORT,
  overlay: true,
  clientLogLevel: 'none',
  noInfo: true,
  open: true,
  historyApiFallback: true,
});

// Server listener
server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('Server listen on')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`
    )}`
  );
});
