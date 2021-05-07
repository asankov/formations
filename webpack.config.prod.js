const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

// important for Babel
process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",
  target: "web",
  // slower than the one for dev, but higher quality for prod
  devtool: "source-map",
  entry: "./src/index",
  // for development webpack does not output files, but serves from memory
  // this configuration is still needed
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // display build stats
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),

    new MiniCssExtractPlugin({
      // include <contenthash> so that the filename changed only if the CSS changes
      filename: "[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      // This makes sure React is built in prod mode.
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // favicon: "src/favicon.ico",
      minify: {
        // see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
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
        use: [
          // extract the css to a separate file using the loader below
          // this will run last
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // for debugging purposes
              sourceMap: true,
            },
          },
          {
            // this will run first
            loader: "postcss-loader",
            options: {
              // minify css
              pluging: () => [require("cssnano")],
              sourceMap: true,
            },
          },
        ],
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
