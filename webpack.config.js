const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'    // 程序入口
    },
    output: {
        path: path.resolve(__dirname, 'dist'),  // 打包后文件输出目录
        filename: 'bundle.js',   // 输出文件名
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 输出文件名
            template: path.join(__dirname, 'src/index.html')    // html 模板文件位置
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),  // 监听位置
        port: 9000,  // 设置服务器端口
        open: true,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
}