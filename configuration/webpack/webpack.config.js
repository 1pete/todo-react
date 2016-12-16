const path = require('path')
const webpack = require('webpack')

const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsPlugin = require('favicons-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const root = path.resolve()

module.exports = (env) => {
  const isDev = env !== 'prod'

  const config = {
    context: root,
    entry: [
      'core-js/shim',
      '@blueprintjs/core/dist/blueprint.css',
      './src/index.css',
      './src/index.js',
    ],
    output: {
      path: path.resolve('dist'),
      publicPath: '',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
        {
          test: /\.css$/,
          loader: isDev ? 'style!css' : ExtractTextPlugin.extract('css?minimize'),
        },
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=public/fonts/[name].[ext]' },
      ],
    },
    resolveLoader: {
      moduleExtensions: ['-loader'],
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    recordsOutputPath: path.resolve('records.json'),
    performance: {
      hints: !isDev && 'warning',
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.ejs',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
        __DEV__: isDev,
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          babel: isDev ? require('../babel/babel.dev') : require('../babel/babel.prod'),
        },
      }),
    ],
  }

  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  } else {
    config.plugins.push(...[
      new CleanPlugin(['dist'], { root }),
      new ExtractTextPlugin('styles.css'),
      new FaviconsPlugin({
        logo: path.resolve('src/logo.png'),
        title: 'To-Do List',
        background: '#0097A7',
      }),
      new OfflinePlugin({
        ServiceWorker: {
          cacheName: 'todo-react',
        },
        AppCache: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: true },
        // sourceMap: true,
      }),
    ])
  }

  return config
}
