import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import webpackDevServer from "webpack-dev-server";

const config: Configuration & webpackDevServer.Configuration = {
  entry: ["core-js/stable", path.resolve(__dirname, "./src/index.tsx")],
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    })
  ],
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\/js$/,
        loader: "source-map-loader",
        enforce: "pre"
      }
    ]
  }
};

export default config;
