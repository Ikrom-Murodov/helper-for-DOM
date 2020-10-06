import getBaseConfig from './webpack.base';
import merge from 'webpack-merge';

// Plugins for building a project in production mode
import * as plugins from '../plugins/prod';

// Modules for building a project in production mode
import * as modules from '../modules/prod';

export default () => {
  return merge(
    getBaseConfig(),
    {
      mode: 'production',
      output: {
        filename: 'js/[name].[contenthash].js',
      },

      optimization: {
        moduleIds: 'hashed',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
    },
    plugins.cleanBuildDirectory(),
    plugins.setupCss(),
    modules.loadOptimizedImages(),
    modules.loadSassAndScss(),
    modules.loadCss()
  );
};
