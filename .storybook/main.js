const myConfig = require('../webpack.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {parser: 'typescript'},
        },
      ],
      enforce: 'pre',
    });

    return {
      ...config,
      module: {
        rules: [...config.module.rules, ...myConfig.module.rules]
      },
      resolve: myConfig.resolve,
      plugins: [
        ...config.plugins,
        new CopyWebpackPlugin([{from: './public/icons', to: 'public/icons'}]),
      ]
    };
  },
};
