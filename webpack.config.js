const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = [
  {
    mode: process.env.NODE_ENV || "development",
    name: "playwright-react-typescript",
    target: "web",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist/client"),
      publicPath: "/dist/client/",
      filename: "[name].js"
    },
    resolve: {
      extensions: [".tsx", ".jsx", ".js"],
      alias: {
        react: path.resolve(__dirname, "./node_modules/react"),
        "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
        "@src": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components")
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: [/node_modules/]
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          exclude: [/node_modules/],
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ManifestPlugin({ fileName: "../manifest.json" }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].bundle.css" : "[name].[hash].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        filename: "../index.html"
      })
    ],
    stats: "minimal",
    devServer: {
      contentBase: "./dist",
      writeToDisk: true,
      port: 9091
    }
  }
];
