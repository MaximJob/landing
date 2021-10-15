const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const extension = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if (!isDev) {
        config.minimizer = [
            new TerserWebpackPlugin
        ]
    }

    return config
}

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
            '@assets': path.resolve(__dirname, "src/assets"),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
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
        new MiniCssExtractPlugin({
            filename: extension('css')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
                // ,
                // {
                //     from: path.resolve(__dirname, 'src/assets/img'),
                //     to: path.resolve(__dirname, 'dist/img')
                // }
            ]
        }),
    ],
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: 'html-loader'
            // },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}