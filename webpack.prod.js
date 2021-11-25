/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin();

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const index = {
  filename: 'index.html',
  template: './src/template/index.pug',
  chunks: ['index']
}

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    host: 'localhost',
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
});