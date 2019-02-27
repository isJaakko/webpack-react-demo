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
<<<<<<< HEAD
            // use: ['style-loader', 'css-loader']
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[path]---[local]---[hash:base64:5]'
                    }
                }],
=======
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[path]---[local]---[hash:base64:5]'
                }
            }],
>>>>>>> c59000e29e820f6b6b66692fdc13218eab4d4e65
            exclude: [path.resolve(__dirname, 'node_modules')]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: [path.resolve(__dirname, 'node_modules')]
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
    resolve: {
        alias: {
            component: path.resolve(__dirname, 'src/component/')
        }
    },
    devtool: 'cheap-module-eval-source-map'
}