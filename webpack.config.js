var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.join(__dirname, '/dist/');


require("babel-polyfill") ;

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
       filename: '[name].js',
       publicPath: '/'
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
    }, {
      // Linter
      enforce: "pre",
      test: /\.jsx?$/,
      exclude: ['/node_modules/'],
      loader: "eslint-loader",
      options: {
        emitError: true,
        configFile: '.eslintrc',
        fix: true
      }
    }
]}};

module.exports = config;
