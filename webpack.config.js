var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path:path.resolve(__dirname, 'dist'),
    devtool: "source-map",
    filename: "bundle.js",
    publicPath: "/dist"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: [ "es2015", "react", "react-hmre" ]
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|ico)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader']
      },
  ]
  }
}
