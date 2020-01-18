const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// npm install -D clean-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}

// to run script use cli command:
//  npx webpack --config webpack.config.js



