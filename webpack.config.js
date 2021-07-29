const path = require("path");
const webpack = require("webpack");
 module.exports = {
  mode: "development",
     entry: path.resolve(__dirname, "input.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js'
  }
};