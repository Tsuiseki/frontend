const webpack = require('webpack')
const path = require('path')

module.exports = function (env) {
  return {
    entry: {
      app: [
        'react-hot-loader/patch',
        './src/index.jsx',
      ],

      vendor: [
        'react',
        'redux',
        'react-dom',
        'react-router',
        'react-redux',
        'react-router-redux',
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
      port: '80',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            'react-hot-loader/webpack',
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
        minChunks: Infinity,
        filename: 'vendor.js',
      }),
    ],
  }
}
