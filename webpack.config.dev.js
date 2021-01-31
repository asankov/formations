const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// important for Babel
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  // this allows us to debug our actual code in the browser
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  // for development webpack does not output files, but serves from memory
  // this configuration is still needed
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    // reduces the info written to the command line
    stats: "minimal",
    // overlay any errors that occur in the browser
    overlay: true,
    // all requests are send to index.html
    // can load deep links
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // favicon: "src/favicon.ico",
    }),
  ],
  // which files to handle
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          // run Babel on all JS files
          "babel-loader",
          // run ESLint on save
          "eslint-loader",
        ],
      },
      {
        test: /(\.css)$/,
        // import css just as js
        // webpack will bundle anything into one file
        use: ["style-loader", "css-loader"],
      },
      {
        test: /(\.(jpg|png|ttf))$/,
        use: [
          {
            loader: "url-loader?limit=100000",
          },
        ],
      },
    ],
  },
};
