const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

const baseConfig = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|csv|svg|eot|ttf|woff2?|otf)$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 8000,
    hot: true,
    host: "127.0.0.1",
  },
};

module.exports = (env, argv) => {
  const config = dotenv.config({
    path: argv.mode === "production" ? ".env.production" : ".env",
  });

  baseConfig.plugins.push(
    new DefinePlugin({
      "process.env": JSON.stringify(config.parsed),
    })
  );

  return baseConfig;
};
