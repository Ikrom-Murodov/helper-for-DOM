import getBaseConfig from './webpack.base';
import merge from 'webpack-merge';

// Modules for project development in development mode
import * as modules from '../modules/dev';

export default () => {
  return merge(
    getBaseConfig(),
    {
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
    },
    modules.loadSassAndScss(),
    modules.loadSourceMap(),
    modules.loadImages(),
    modules.loadCss()
  );
};
