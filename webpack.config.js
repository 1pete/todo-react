const path = require('path')
const webpack = require('webpack')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { FaviconsWebpackPlugin } = require('favicons-manifest-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const root = path.resolve()
const dist = path.resolve('dist')

module.exports = (env) => {
  const isDev = env !== 'prod'

  const config = {
    context: root,
    entry: {
      app: './src/index',
    },
    output: {
      path: dist,
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
    resolve: {
      alias: {
        'history/createMemoryHistory': path.resolve(__dirname, 'node_modules/history/es/createMemoryHistory'),
        'history/createHashHistory': path.resolve(__dirname, 'node_modules/history/es/createHashHistory'),
        'history/createBrowserHistory': path.resolve(__dirname, 'node_modules/history/es/createBrowserHistory'),
        'history/PathUtils': path.resolve(__dirname, 'node_modules/history/es/PathUtils'),
      },
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    recordsOutputPath: path.resolve('records.json'),
    devServer: {
      noInfo: true,
      hot: true,
      contentBase: dist,
      historyApiFallback: true,
      port: 3000,
    },
    plugins: [
      new HtmlPlugin({ template: './src/index.html' }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
        __DEV__: isDev,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    stats: {
      children: false,
      modules: false,
    },
  }

  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  } else {
    config.plugins.push(...[
      new CleanPlugin(['dist'], { root }),
      new ExtractTextPlugin('styles.css'),
      new FaviconsWebpackPlugin({
        logo: path.resolve('src/logo.png'),
        inject: true,
        prefix: 'icons/',
        options: {
          appName: 'To-Do List',
          background: '#0097A7',
          theme_color: '#0097A7',
          start_url: '/todo-react/?homescreen=1',
        },
        html: {
          separator: '\n    ',
        },
      }),
      new OfflinePlugin({
        ServiceWorker: {
          cacheName: 'todo-react',
          events: true,
        },
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
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
