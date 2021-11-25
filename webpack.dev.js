const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const index = {
  filename: 'index.html',
  template: './src/template/index.pug',
  chunks: ['index']
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    host: "localhost",
    port: 8080,
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [
    new HtmlWebpackPlugin(index),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
});