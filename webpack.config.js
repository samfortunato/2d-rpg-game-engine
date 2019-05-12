module.exports = {
  mode: 'development',
  entry: './ts/index.ts',
  output: {
    path: `${__dirname}/js`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.ts$/, use: ['ts-loader'], exclude: /node_modules/ }
    ]
  }
};
