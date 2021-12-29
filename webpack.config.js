const path = require('path');

module.exports = {
  entry: {
    popup: path.resolve(__dirname, './src/popup.js'),
    background: path.resolve(__dirname, './src/background.js'),
  },
  output: {
    path: path.resolve(__dirname, './web-extension'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devtool: 'inline-source-map'
};
