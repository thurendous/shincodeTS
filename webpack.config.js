module.exports = {
  entry: { bundle: './src/index.ts' }, //entry point
  output: {
    path: `${__dirname}/dist`, // output path
    filename: '[name].js', // output file name
  },
  mode: 'production', // dev mode includes source maps
  resolve: {
    extensions: ['.ts', '.js'], // ca use this:"from './index'""
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
}
