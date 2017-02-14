const path = require('path')
const webpack = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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
    entry: {
      app: [
        'core-js/shim',
        '@blueprintjs/core/dist/blueprint.css',
        './src/index.css',
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve('dist'),
      publicPath: '',
      filename: '[name].js',
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
        {
          test: /\.css$/,
          use:
            isDev
            ? ['style-loader', 'css-loader']
            : ExtractTextPlugin.extract({ use: ['css-loader'] }),
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [{ loader: 'file-loader', options: { name: 'public/fonts/[name].[ext]' } }],
        },
      ],
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    recordsOutputPath: path.resolve('records.json'),
    plugins: [
      new HtmlPlugin({ template: './src/index.html' }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
        __DEV__: isDev,
      }),
      new FaviconsPlugin({
        logo: path.resolve('src/logo.png'),
        prefix: 'icons/',
        title: 'To-Do List',
        background: '#0097A7',
      }),
    ],
  }

  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  } else {
    config.plugins.push(...[
      new CleanPlugin(['dist'], { root }),
      new ExtractTextPlugin('styles.css'),
      new OfflinePlugin({
        ServiceWorker: {
          cacheName: 'todo-react',
          events: true,
        },
        AppCache: false,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: true },
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.resolve('report.html'),
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: path.resolve('stats.json'),
      }),
    ])
  }

  return config
}
