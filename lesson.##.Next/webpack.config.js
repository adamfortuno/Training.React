'use string';

const path = require('path');
const project_path = 
    path.join(__dirname, 'public');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: project_path,
        filename: 'bundle.js'
    }
};