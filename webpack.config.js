const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './app',
    noInfo: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000/api',
    //     secure: false
    //   }
    // },
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
      loader: 'style!css'
    }, { 
      test: /\.scss$/,
      loader: 'style!css!sass'
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