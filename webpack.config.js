/*const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
    plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    })
  ],
  mode: 'development',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};*/
const path = require('path'); const HtmlWebpackPlugin = require('html-webpack-plugin'); module.exports = { mode: 'development', entry: './src/index.js', devtool: 'inline-source-map', devServer: { static: './dist', }, plugins: [ new HtmlWebpackPlugin({ template: './src/index.html', }), ], output: { filename: '[name].js', path: path.resolve(__dirname, 'dist'), clean: true, }, optimization: { runtimeChunk: 'single', }, module: { rules: [ { test: /\.css$/i, use: ['style-loader', 'css-loader'], }, { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', }, { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', }, ], }, }; 