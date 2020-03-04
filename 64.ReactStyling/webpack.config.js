'use string';

const path = require('path');
const project_path =
    path.join(__dirname, 'public');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: project_path,
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        // {
        //     test: /\.css$/,
        //     use: ['style-loader', 'css-loader']
        // },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};