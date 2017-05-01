const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            // include: path.join(__dirname, 'src'),
            // exclude: /node_modules/
          }
        ]
      }
    ]
  }
};