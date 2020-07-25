const myConfig = require('../webpack.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
  return {
    ...config,
    module: {
      rules: myConfig.module.rules
    },
    resolve: myConfig.resolve,
    plugins: [
      ...config.plugins,
      new CopyWebpackPlugin([{from: './public/icons', to: 'public/icons'}]),
    ]
  };
},
};
