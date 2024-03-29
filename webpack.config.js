const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: "production",
   entry: {
      background: './src/background.ts',
      content: './src/content.ts',
      script: {
         import: './src/js/script.ts',
         filename: './js/script.js'
      }
      // background: path.resolve(__dirname, "src", "background.ts"),
   },
   output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".tsx", ".ts", ".js"],
   },
   module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: [/node_modules/, __dirname + '/src/tests'],
        },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
   ],
};