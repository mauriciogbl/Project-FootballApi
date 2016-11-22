module.exports = {
  entry: {
    app: [
      './application/index',
    ],
    style: [
      './sass/index.scss',
    ]
  },

  output: {
    filename: '[name].bundle.js',
    publicPath: '',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        loaders: ['style', 'css', 'sass'],
        test: /\.scss$/,
      }
    ]
  }
}
