"set strict";

console.log('The Indicision App is running.');

const appRoot = document.getElementById('app');
const now = new Date();
const template = (<h1>Indecision App - {now.toISOString()}</h1>);

ReactDOM.render(template, appRoot);