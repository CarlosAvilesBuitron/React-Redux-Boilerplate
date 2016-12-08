var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: {
        main: ['./src/containers/main.jsx']
    },
    output: {
        filename: './public/[name].js'
    },
    plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack', 'babel'],
            },
            {
             test:/\.scss$/,
             include: path.join(__dirname, 'src'),
             loader: 'style!css!sass'
            }
        ]
    }
};