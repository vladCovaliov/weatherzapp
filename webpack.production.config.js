var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    './frontend/javascripts/client.jsx',
    './frontend/stylesheets/entry.scss'
  ],
  module: {
    loaders: [
      {
        loader: "babel-loader",

        include: [
          path.resolve(__dirname, "frontend", "javascripts"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
          presets: ['es2015', 'stage-2', 'react'],
        }
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.gif$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      { test: /\.scss$/,   loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  output: {
    // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
    path: path.resolve(__dirname, 'public', 'assets'),
    // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
    filename: 'bundle.production.js',
    // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
    publicPath: '/assets/',
  },
  resolve: {
    // tell webpack which extensions to auto search when it resolves modules. With this,
    // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
    extensions: ['', '.js', '.jsx', 'es6'],
    // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
    // Bower, we want it to look in there too
    // modulesDirectories: [ 'node_modules', 'bower_components' ],
  },
  plugins: [
    // we need this plugin to teach webpack how to find module entry points for bower files,
    // as these may not have a package.json file
    // new webpack.ResolverPlugin([
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    // ])
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {comments: false}
    })
  ]
};