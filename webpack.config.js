const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@emotion/styled-base': path.resolve('./node_modules/@emotion/styled/base')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              babelCore: '@babel/core',
              babelOptions: {
                babelrc: false,
                plugins: ['@emotion'],
              },
            },
          },
        ],
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Makes Styled',
      template: 'index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
