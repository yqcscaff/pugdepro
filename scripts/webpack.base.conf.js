const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _ = process.argv.find(item => item.indexOf('--output') !== -1);

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(__dirname, '../', _ ? _.slice(_.indexOf('=') + 1) : 'dist'),
    filename: '[name]' + '.[hash:8]' + '.js',
    chunkFilename: '[id]' + '.[hash:8].chunk' + '.js'
  },
  resolve: {
    alias: {
      'src': path.join(__dirname, '../src'),
      'Components': path.join(__dirname, '../src/components'),
      'Assets': path.join(__dirname, '../src/assets')
    },
    extensions: ['.js', '.css', 'json']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        // MiniCssExtractPlugin.loader,
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }, {
      test: /\.less$/,
      use: [
        // MiniCssExtractPlugin.loader,
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            module: true,
          },
        },
        'postcss-loader',
        'less-loader',
      ],
    }, {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'img/[name].[hash:8].[ext]'
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
            name: 'fonts/[name].[hash:8].[ext]'
          }
        }
      ]
    }]
  }
};