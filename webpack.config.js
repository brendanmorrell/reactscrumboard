const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom template',
      template: 'template.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // historyApiFallback: true,
    // publicPath: '/dist',
  },
};
