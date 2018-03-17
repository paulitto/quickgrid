const path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: { 
    entry: './src/index.js'
  },  
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
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
    filename: 'quickgrid.bundle.js',
    path: path.resolve(__dirname, 'dist')
  } 
};