const webpack = require('webpack');
const { resolve }  = require('path');

module.exports = function(env) {
  return {
    entry: {
      app: [
        './src/index.js',
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
      path: resolve(__dirname, 'dist'),
    },

    devtool: 'inline-source-map',

    devServer: {
      hotOnly: true,
      contentBase: resolve(__dirname, 'src'),
      host: '0.0.0.0',
      port: '8080',
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
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
          ],
        },
      ],
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
