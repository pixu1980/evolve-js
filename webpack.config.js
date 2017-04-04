const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve('src'),

  entry: {
    'createjs-elements': './index.js',
    'EaselJS': ['./CreateJS/EaselJS/index.js'],
    'PreloadJS': ['./CreateJS/PreloadJS/index.js'],
    'SoundJS': ['./CreateJS/SoundJS/index.js'],
    'TweenJS': ['./CreateJS/TweenJS/index.js'],
    'Elements': ['./Elements/index.js'],
    'Sounds': ['./Sounds/index.js'],
    'Translations': ['./Translations/index.js']
  },

  loader: {
    appSettings: {
      env: 'development' // string, default to 'development'
    }
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name].js',
    library: 'createjs-elements',
    libraryTarget: 'umd',
  },

  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin,
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|bower_components/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {
              modules: false,
              targets: {
                node: 4
              }
            }]
          ]
        }
      },
    ],
  },

  externals: packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : [],

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
  },

  eslint: {
    configFile: '.eslintrc',
  },

};
