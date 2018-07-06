
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  performance: {
    hints: "warning",
    maxAssetSize: 5000000
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        react: {
          name: "react",
          chunks: 'all',
          priority: 50,
          test(module) {
            return /react|redux|react-router|react-dom|react-router-dom/.test(module.context)
          },
        },
        antd: {
          name: "antd",
          chunks: 'all',
          priority: 20,
          test(module) {
            return /antd/.test(module.context)
          },
        },
        antdist: {
          test: /[\\/]node_modules[\\/](@ant-design)[\\/](icons)[\\/]/,
          name: 'antdist',
          chunks: 'all',
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlwebpackPlugin({
      title: "电影推荐系统",
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    })
  ]
})