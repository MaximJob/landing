const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const extension = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        filename: extension('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.svg'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: false
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.s[ac]ss/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    }
}