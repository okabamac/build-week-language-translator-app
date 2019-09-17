const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    watch: true,
    // Development Tools (Map Errors To Source File)
    devtool: 'source-map',
    devServer: {
      hot: true,
      open: true,
      port: 3000,
    }
  }
};
