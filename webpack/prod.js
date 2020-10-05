import Webpack from 'webpack';
import chalk from 'chalk';

// Configuration files for production mode
import getProdConfig from './config/webpack.prod';

// Compilation webpack
const compiler = Webpack(getProdConfig());

// Running a project build
compiler.run((error, stats) => {
  // Handling configuration errors
  if (error) {
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  const info = stats.toString({
    hash: true,
    colors: true,
    version: true,
    children: false,
    env: true,
    modules: false,
    entrypoints: false,
  });

  // Compile-time error handling
  if (stats.hasErrors()) {
    console.log(chalk.redBright('Error'));
    console.error(info);

    return null;
  }

  // Compile-time warning handling
  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright('Warning'));
    console.warn(info);
  }

  console.log(chalk.greenBright('build completed'));
  console.log(info);
});
