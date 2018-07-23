const path = require('path');

module.exports = {
  entry: {
      'atd-request': path.resolve(__dirname, './src/js/request.js')
    },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/js'),
    library: 'Reqeust',
    libraryTarget: 'commonjs-module'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['env']
              }
          }
      ]
  },
  plugins: [

  ]
};