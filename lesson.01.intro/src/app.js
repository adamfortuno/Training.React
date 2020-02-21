"use strict";

console.log("app.js is running.");


// JSX - JavaScript XML 
var appRoot = document.getElementById('app');
var template = <h1>Does this change?</h1>

ReactDOM.render(template, appRoot);