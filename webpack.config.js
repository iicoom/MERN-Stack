const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    
  ],
  output: {
    //filename: 'js/[name].bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } //将react编译成js文件
            },
            // { test: /\.css$/, loader: 'style-loader!css-loader' }, 
            // //打包css文件
            // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'}, 
            // //编译sass文件
            // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
            // //对图片进行打包
        ]
  }
};