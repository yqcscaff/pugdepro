
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const spinner = ora({text: 'building for production...', spinner: "shark"})
const log = console.log;
spinner.start()

rm(webpackConfig.output.path, err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    log(chalk.cyan('  Build complete.\n'))
  })
})