var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      '@': path.resolve('components')
    }
  },
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 500000,
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      /*use: {
        loader: 'babel-loader',
        options: { // 也可以 query
          presets: ['es2015', 'react'],
          plugins: [[
            'import', { // import 是 babel-plugin-import 插件， 按需加载antd 的css
              libraryName: 'antd',
              style: 'css'
            }
          ]]
        }*/
        /** 
         * @Author: yanqing 
         * @Date: 2018-07-06 23:54:19 
         * @Desc: 这里要说明一下，上面注释掉的内容写到了 .babelrc 文件中。也可以在上面写， 
         * 因为在许多项目中babel的配置项会非常巨大。所以作为替代，你可以把这些配置项写入一个叫做.babelrc的文件中。
         * 如果这个文件存在的话bable-loader会自动的加载这个文件。
      }
      */
    }]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html',
      template: './index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};