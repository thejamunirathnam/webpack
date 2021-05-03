const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module:{
      rules:[
       {
          test:/\.(js|jsx)$/,  //test file which has extension with either js or jsx
          exclude:/node_modules/,   // ignore the particular folder that we provide
          use: {
            loader:'babel-loader',
          },
       },
     ]
  },
  devServer:{ 
    port:5200           // for starting dev sever at particular port
 },
  plugins: [
    new HTMLWebPackPlugin({
        template:"./src/index.html",
        // filename:"./index.html"    // optional default will be index.html
       })
  ]
 };