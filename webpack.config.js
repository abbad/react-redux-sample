var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.join(__dirname, '/dist/');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'react-hot-loader/patch',
    'webpack/hot/dev-server',
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
        }),
      new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [{
      // Sass loader
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }, {
      // Babel loader for JSX.
      test: /\.jsx?/,
      exclude: '/node_modules/',
      include: path.join(__dirname, '/app/'),
      use: [{loader: 'babel-loader'}]
    }]
  }
};

module.exports = config;
