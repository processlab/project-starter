const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const PUBLIC_PATH = '/assets/js/';

module.exports = {
  entry: path.resolve(APP_DIR, 'index.tsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(PUBLIC_DIR, './assets/js/'),
    publicPath: PUBLIC_PATH
  },
  resolve: {
    modules: [APP_DIR, path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.json', '.ts', '.tsx', '.css']
  },
  devtool: 'source-map',
  stats: 'errors-only',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.svg$/,
      loader: 'raw-loader'
    }, {
      test: /\.css$/,
      include: APP_DIR,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:5]',
        }
      }, {
        loader: 'postcss-loader'
      }]
    }]
  },
  watchOptions: {
    poll: 1000
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    publicPath: PUBLIC_PATH,
    port: 3000,
    historyApiFallback: true,
  }
};
