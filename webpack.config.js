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
        loader: MiniCssExtractPlugin.loader
      },
        { loader: 'css-loader', options: { url: false } },
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(svg|png|jpg|gif|woff2?|ttf|eot)$/,
      type: 'asset/inline'
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'styles/main.css' : 'styles/main.[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new LiveReloadPlugin()
  ]

};
