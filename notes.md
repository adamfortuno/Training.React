# React

## Environment Setup

Andrew has students install the following:

- Install Node.js
- Install NPM
- Install Yarn
- Install Live Server

Install Node.js by downloading the installer from https://nodejs.org. Installing Node.js will also install NPM.

Once you have npm working, you can use it to install `live-server` and `Yarn`. You're going to install both modules globally:

```sh
npm install -g live-server
live-server -v

npm install -g yarn
yarn -v
```

## Course Notes

Andrew starts the course by introducing `live-server`. You create the following artifacts:

```sh
.\project
.\project\public
.\project\public\index.html
.\project\public\scripts
.\project\public\scripts\app.js
```

We create a basic HTML page with head, title, body, and script tags. The script element references the `.\scripts\app.js` script. We also add two references to the React and ReactDOM modules:

```html
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
```

`React` and `ReactDOM` are global objects.

> React can be used in different contents: Native, Virtual Reality (VR), DOM, etc. We are using it in the DOM context here.

You start `live-server` with the following syntax:

```sh
# ...navigate to the directory hosting your site's directory...
live-server .\public\
```

This fires up the default browser (Chrome for me) and displays the index page. Andrew directs students to the console in Chrome's developer tools. You can verify React is working `React` and `ReactDOM` in the console to see if the modules were loaded.

Andrew introduces *JSX* an acronym for "JavaScript XML".

- It's a JavaScript language extension
- It's a templating syntax provided by React

The templates script is converted to "normal" JavaScript using Babel.

**Step-1:**  You create a tag in the document; see the `div` tag: 

```html
<body>
  <div id='app'></div>
  <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
  <script src="/scripts/app.js"></script>
</body>
```

**Step-2:** From your script, you define the content to be added to that anchor: 

```javascript
var appRoot = document.getElementById('app');
var template = <h1>Does this change?</h1>

ReactDOM.render(template, appRoot);
```

You call the `render()` method of the `ReactDOM` with two parameters: (1) a DOM object and (2) your template.

**Step-3:** You run the template script through Babel:

```sh
babel src/app.js --out-file=public/scripts/app.js --presets="env,react"
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
```

>  [Babel](|babeljs.io) commonly used to convert JS 6 and 7 to 5 for backward compatibility.

Babel is a tansformation engine. What it can transform is based on the presets available to it. To transform the JSX templates, it needs the *env* and *react* templates.

You install Babel and the needed presets by...

1. Install the `babel-cli` globally using npm.
2. Initialize Yarn in your environment: `yarn init --yes`
3. Install the `env` preset using Yarn.
4. Install the `react` preset using Yarn.  

You're initializing your project before installing the local modules/presets so you can rebuild them from a `yarn install` on deployment.

```sh
npm install -g babel-cli@6.24.1
yarn init --yes
yarn add babel-preset-react@6.24.1
yarn add babel-preset-env@1.5.2
```

If you need to rebuild the `node_modules` folder, you can just run `node install`; just like with `npm`.

> Yarn seems to work like `npm`. Initializing a project creates a `package.json` file. When you install a module with `yarn`, you end up with a `yarn.lock` file, which stores installed module dependencies.

formatting of html in your template
referencing javascript expressions in your template
- static variables
- objects
- conditional rendering: functions, ternery operator, and logical ops.

```javascript
<p>{user.name ? user.name : "unknown"}</p>
```

```javascript
{user.age > 0 && <p>Age: {user.age}</p>}
```

```javascript
{getThing(user.thing)}
```

var, is a mechanism for declaring variables in JavaScript.
- variable's created with var can be re-assigned
- variable's created with var can be re-defined (not possible w/let)
- scoped to the function in-which it was created

let, is a mechanism for declaring variables in JavaScript.
- Introduced with ES6.
- variables can be declared once
- variables can be re-defined
- scoped to the code block it was declared

const, is a mechanism for declaring constants in JavaScript.
- intorduced with ES6.
- variables can be defined and declared once.
- scoped to the code block it was declared

ES5 functions
- ES5 functions can be named
- ES5 functions can be assgined to variables
- ES5 functions can be anonymous
- arguments IS bound: you have an array of arugments
- "this" keyword is not bound in arrow functions
 
Arrow functions
- introduced with ES6
- All arrow functions are anonymous
- Shorthand syntax
- arguments are not bound in arrow functions
- Binds to the parent context's "this" value. If the parent had a value for 
  this, that is what is in your arrow function.
- It does not bind to it's own this value.

Object Method Definition...

ES5

```javascript
const obj = {
   func: function() {
   
   }
}
```

ES6

```javascript
const obj = {
   func() {
   
   }
}
```

Regardless of the way the method is defined, it behaves the same.


```javascript
const multiplier = {
  numbers: [1, 3, 33, 4, 2],
  multiplyer: 4,
  multiply() {
  	return this.numbers.map( number => number * this.multiplyer );
  }
}
```

console.log(multiplier.multiply());


Templates...

- Some attributes have the same name as HTML e,g, "id".
- However, not all attributes have the same name e.g., "class" is "className"
- You can get this from React's Documentation - facebook.github.io

Virtal DOM
- It looks like we're re-rendering the entire page.
- React uses a virtal DOM to only update the portions of the page that changed.
- This is far more efficent than re-rendering the entire page.
- The diff-rendering is a performance feature of React.

JSX cannot render JavaScript objects
JSX can render JavaScript arrays
JSX can render JSX

```javascript
const template = (
  <div>
    <h1>Section Title</h1>
    {
      [<p key="1">1</p>, <p key="2">1</p>]
    }
  </div>
);
```
> When you render JSX inside an array, you should specify the `key` attribute so React has a unique identifier for each element.

You can place javascript comments in a JSX expression.

ES6 Classes
- Common to make the first letter of the class' name upper case.
- You have to use the ES6 method definition syntax for method definition.
- There are no commas between properties and methods in a class
- There are no semi-colons after methods in a class

React Components
- An atomic piece of the user interface.
- There is a parent component that can tie/group sub-components
- There is a parent component that contains all other components on the page.
- We can create components that host components.
- Classes for React components have to start with a capitol letter
- Every component has to include a render() method.
- You can let components communicate with one-another through "props" or component props.

```javascript
!!undefined
will return false
```

You can use `bind()` to assign a `this` to a function.
mdn.bind

You can do this in the reference to the method.
You can do this in the class' constructor.

React Component State
- Components will re-render if their state changes
 > You have to setup a component with a default state; series of key/value pairs.
 > This will be what the component is initially rendered with.
 > State changes in response to an event e.g., button click.
 > Component re-renders with new state values

## Questions

1. Can live-server only serve up a directory named `public`?
2. Why can't you add the params to the functions in the event handler?