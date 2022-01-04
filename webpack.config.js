const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    popup: path.resolve(__dirname, './src/popup/popup.js'),
    background: path.resolve(__dirname, './src/background/background.js'),
    options: path.resolve(__dirname, './src/options/options.js'),
  },
  output: {
    path: path.resolve(__dirname, './web-extension'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "" }
      ],
    }),
  ],
};
