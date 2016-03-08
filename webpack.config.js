module.exports = {
  entry: './src/index',
  output: {
    path: 'dist/',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'stage-2'],
        },
      },
    ],
  },
};
