const path = require("path");

module.exports = {
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    background: path.join(__dirname, "src/background/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
