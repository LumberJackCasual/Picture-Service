const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var PUBLIC_DIR = path.join(__dirname, '/client/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: PUBLIC_DIR,
    filename: 'picture_app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development'

};
