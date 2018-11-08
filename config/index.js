
'use strict';
const path = require('path');

module.exports = {
  prod: {
    env: {
      NODE_ENV: 'production'
    },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/h5',
    productionSourceMap: true
  },
  dev: {
    env: {
      NODE_ENV: 'development'
    },
    port: process.env.PORT || 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://movie.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    cssSourceMap: false
  }
};
