const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const baseConfig = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|csv|svg|eot|ttf|woff2?)$/i,
        use: 'file-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
}

module.exports = (env, argv) => {
  const config = dotenv.config({
    path: argv.mode === 'production' ? '.env.production' : '.env'
  });

  baseConfig.plugins.push(
    new DefinePlugin({
      'process.env': JSON.stringify(config.parsed)
    })
  )

  return baseConfig
}

