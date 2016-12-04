const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../webpack/webpack.config')();

const port = 3000;

webpackConfig.entry.unshift(...[
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server',
]);

const compiler = webpack(webpackConfig);
compiler.apply(new DashboardPlugin());

let server = new WebpackDevServer(compiler, {
  quiet: true,
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
});
server.listen(port);
