const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './client/index.js',
  output: {
    path    : '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader : 'babel-loader',
        test   : /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react', 'es2015'],
          plugins: ['transform-class-properties']
      }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};
