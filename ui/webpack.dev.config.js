const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve("babel-loader"),
            options: {
              envName: "development",
              presets: [
                [
                  "@babel/preset-typescript",
                  {
                    target: "ES2015"
                  }
                ]
              ],
              plugins: [require.resolve("react-refresh/babel")]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshPlugin({
      disableRefreshCheck: false
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "eval",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    publicPath: "/",
    historyApiFallback: true
  }
};
