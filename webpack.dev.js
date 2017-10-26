const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  }
});