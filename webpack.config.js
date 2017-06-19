var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.join(__dirname, '/dist/');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'react-hot-loader/patch',
    // TODO: Error: [HMR] Hot Module Replacement is disabled. (investigate)
    // 'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/index.jsx')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
          template: 'app/index.html',
          inject: 'body',
          filename: 'index.html'
        })],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.join(__dirname, '/app/'),
        loader : 'babel-loader'  
      }
    ]
  }
};

module.exports = config;
