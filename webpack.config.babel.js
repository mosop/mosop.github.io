const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    modulesDirectories: ['bower_components']
  },
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'assets/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        loader: 'babel'
      },
      {
        test: /animate.css$/,
        loader: ExtractTextPlugin.extract('css?minimize')
      },
      {
        test: /\.styl$/,
        include: __dirname + '/src',
        loader: ExtractTextPlugin.extract('css!stylus')
      },
      {
        test: /\.jpg$/,
        include: __dirname + '/src/img',
        loader: 'url?name=assets/img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),
    new ExtractTextPlugin('assets/app.css'),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.DedupePlugin()
  ]
};
