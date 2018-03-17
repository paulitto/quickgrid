const path = require('path');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
 entry: { 
    entry: './src/index.js'
  },  
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
  },
  output: {
    filename: 'quickgrid.min.js',
    path: path.resolve(__dirname, 'dist')
  } 
};