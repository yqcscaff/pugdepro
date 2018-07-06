const fs = require('fs')
const path = require('path')

function outputData(filePath) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, filePath), 'utf8'))
}

module.exports = {
  'GET /movie/list': outputData('./movie.json'),
  'POST /movie/list': outputData('./movie.json')
}