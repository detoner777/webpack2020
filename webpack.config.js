const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// npm install -D clean-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    //ставим папку для рабочих исходников по умолчанию
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        //сборка в один бандл всех основных скриптов
        main: './index.js',
        //для подключения стороннего срипта
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        //автоматическая генерации HTML совместимого с бандлами
        new HTMLwebpackPlugin({
            template: './index.html'
        }),
        //очистка папки сборки
        new CleanWebpackPlugin()
    ],
    //модули для импорта и подключения СSS
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}

// to run script use cli command:
//  npx webpack --config webpack.config.js



