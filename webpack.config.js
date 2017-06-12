const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './app',
    noInfo: false
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery/src/jquery',
      Router: 'director/build/director'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, { 
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, { 
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader'
    }]
  }
};