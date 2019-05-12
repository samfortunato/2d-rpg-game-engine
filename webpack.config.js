module.exports = {
  entry: './ts/index.ts',
  output: {
    path: `${__dirname}/js`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: ['ts-loader'], exclude: /node_modules/ }
    ]
  }
};
