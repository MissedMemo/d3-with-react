const { resolve } = require('path')

const SOURCE_DIR = resolve('src')

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: SOURCE_DIR,
      loader: 'babel-loader'
    }]
  }
}