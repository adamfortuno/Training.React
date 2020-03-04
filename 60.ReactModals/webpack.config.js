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
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};