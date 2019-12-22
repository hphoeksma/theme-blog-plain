const path = require('path');
const sitePath = path.resolve(__dirname);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  entry: [
    sitePath + '/Resources/Private/Scripts/main.js',
    sitePath + '/Resources/Private/Styles/main.scss'
  ],
  output: {
    // filename: '[name].[hash].js',
    filename: 'scripts/main.js',
    path: sitePath + '/Resources/Public'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development'
        }
      },
        'css-loader?url=false',
        'postcss-loader',
        'sass-loader'
      ]
    },
      {
      test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=image/svg+xml'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'styles/main.css' : 'styles/main.[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      path: sitePath + '/Resources/Public'
    }),
    new LiveReloadPlugin()
  ]

};
