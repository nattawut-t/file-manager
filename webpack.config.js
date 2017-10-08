const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const { HotModuleReplacementPlugin, NamedModulesPlugin } = webpack
const { resolve } = path

module.exports = {
  entry: {
    app: './src/index',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      // need for webpack-dev-server
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      template: 'index.html',
    }),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
}