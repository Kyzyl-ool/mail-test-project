const myConfig = require('../webpack.config.js');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
  return {
    ...config,
    module: {
      rules: myConfig.module.rules
    },
    resolve: myConfig.resolve
  };
},
};
