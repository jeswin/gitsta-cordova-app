const path = require("path");

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
              envName: "debug",
              presets: [
                [
                  "@babel/preset-typescript",
                  {
                    target: "ES2015"
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "eval"
};
