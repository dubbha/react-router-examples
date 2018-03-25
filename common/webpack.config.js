const path = require('path');

module.exports = {
    mode: 'development',

    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './built'),
        publicPath: '/built/'
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
};