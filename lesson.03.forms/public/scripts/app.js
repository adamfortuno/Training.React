'use strict';
"set strict";

console.log('The Indicision App is running.');

var appRoot = document.getElementById('app');
var now = new Date();
var template = React.createElement(
  'h1',
  null,
  'Indecision App - ',
  now.toISOString()
);

ReactDOM.render(template, appRoot);
