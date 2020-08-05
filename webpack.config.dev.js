const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],

    output: {
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 5000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React',
            template: 'public/index.html',
            filename: 'index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s?)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    overrideBrowserslist: ['> 1%', 'last 2 versions'],
                                }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }],
            },
        ]
    },
};