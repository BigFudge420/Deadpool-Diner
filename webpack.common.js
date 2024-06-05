const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: './src/index.html',
       filename: 'index.html',
       inject: 'body'
     }),
   ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
   output: {
     filename: 'deadpool-diner.bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
