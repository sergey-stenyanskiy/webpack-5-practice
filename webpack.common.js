module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['babel-loader']
      },
      {
        test: /\.(m|c)?jsx?$/i,
        use: ['babel-loader']
      },
      {
        test: /\.pug$/i,
        use: ['pug-loader']
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|otf)$/i,
        type: 'asset'
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline'
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        type: 'asset/resource'
      },
    ]
  }
}