/* globals require, module, __dirname */
const webpack = require('webpack')
const path = require('path')

module.exports = function() {
  return {
    entry: {
      app: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.jsx',
      ],
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'inline-source-map',

    devServer: {
      hotOnly: true,
      contentBase: path.resolve(__dirname, 'src'),
      historyApiFallback: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      port: '80',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },

    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
      extensions: [ '.js', '.jsx' ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks(module) {
         return module.context && module.context.indexOf('node_modules') !== -1
        },
      }),
    ],
  }
}
