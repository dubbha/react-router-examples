const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    context: path.join(__dirname, 'src'),

    entry: './index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './build'),
        publicPath: '/build/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "src"),
                ]
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },

    plugins: [
        new CopyWebpackPlugin([
            {
              from: '../../shared/favicon.png',
              to: path.join(__dirname, './build'),
            }
        ])
    ],

    devServer: {
        inline: true,
        contentBase: './',
    },
};