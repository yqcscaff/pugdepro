const path = require('path');
const config = require('../config');
const utils = require('../utils/utils');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]' + '.[hash:8]' + '.js',
    chunkFilename: '[id]' + '.[hash:8]' + '.js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.css', 'json']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    }, {
      test: /\.less$/,
      loader: [
        'style-loader',
        'css-loader?modules',
        'less-loader'
      ]
    }, {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      ]
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
    }]
  }
};