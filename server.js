webpack = require('webpack');
webpackDevServer = require('webpack-dev-server');

var config = require("./webpack.development.config.js");
config.entry.unshift("webpack-dev-server/client?http://0.0.0.0:3080/", "webpack/hot/only-dev-server");
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  hot: true,
  quiet: false,
  stats: { colors: true, chunks: false },
  contentBase: ["./app/assets/javascripts"],
  clientLogLevel: "info",
  // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.

  // webpack-dev-middleware options
  noInfo: false,
  filename: "bundle.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // It's a required option.
  publicPath: "/assets/",
  headers: { "X-Custom-Header": "yes" },
});

server.listen(3080);