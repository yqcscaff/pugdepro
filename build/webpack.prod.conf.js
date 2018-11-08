
const merge = require('webpack-merge')
const webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.prod.env
    }),
    new HtmlwebpackPlugin({
      title: 'Prayer Pro',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      minify: {
        collapseWhitespace: false,
        removeComments: false,
        removeRedundantAttributes: false
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})