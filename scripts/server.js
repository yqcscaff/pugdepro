
const opn = require('opn')
const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
const mockJson = require('../mock')

const port = 8000
const proxyTable = {
  '/j/search_subjects': {
    target: 'https://movie.douban.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/j/search_subjects': '/j/search_subjects'
    }
  }
}

const app = express()
const compiler = webpack(webpackConfig)
const devMiddle = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: 'none',
});

Object.keys(proxyTable).forEach(function (context) {
  const options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

Object.keys(mockJson).forEach(function (context) {
  const method = context.slice(0, context.indexOf(' ')).toLowerCase()
  const url = context.slice(context.indexOf(' ') + 1)
  
  app[method](url, (_, res) => res.json(mockJson[context]));
})

app.use(require('connect-history-api-fallback')())
app.use(devMiddle)
app.use(require('webpack-hot-middleware')(compiler, {}))

devMiddle.waitUntilValid(() => {
  const uri = 'http://localhost:' + port
  console.log(chalk.cyan(`\n  listen at ${uri} \n`))
  app.listen(port);
  opn(uri);
});

