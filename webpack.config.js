const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
// const BrotliPlugin = require('brotli-webpack-plugin');
const zlib = require('zlib');

const SRC_DIR = path.join(__dirname, '/Client/src');
const PUBLIC_DIR = path.join(__dirname, '/Client/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: PUBLIC_DIR,
    filename: 'picture_app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
