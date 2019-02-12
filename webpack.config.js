var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist"); //where to copy it
var SRC_DIR = path.resolve(__dirname, "src"); // where to see uncompiling code

module.exports = {

    mode: 'development',

    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: [
        SRC_DIR + '/index.js',
    ],

    // output 是放入產生出來的結果的相關參數
    output: {
        path: DIST_DIR,
        filename: 'index_bundle.js',
    },

    module: {
        // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // use: {
                //   loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env','@babel/preset-react']
                //   }
                // }
              }
        ],
    },
    
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        port: 8008,
    },    
    
    // plugins 放置所使用的外掛
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};