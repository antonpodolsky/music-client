const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './app',
    noInfo: false,
    proxy: [{
      path: `/api`,
      target: 'http://localhost:3000'
    }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'css-loader'
    }, { 
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, { 
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader'
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }
    }]
  }
};