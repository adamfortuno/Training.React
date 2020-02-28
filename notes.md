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

## JavaScript Review

There were several ES6 features employed in the class. This section summarizes those features: 

`var`, is a mechanism for declaring variables in JavaScript. It has the following characteristics:

- Variable's created with var can be re-assigned
- Variable's created with var can be re-defined (not possible w/let)
- Scoped to the function in-which it was created

ES6 introduced `let` as a mechanism for declaring variables in JavaScript:

- Introduced with ES6.
- Variables can be declared once
- Variables can be re-defined
- Scoped to the code block it was declared

Additionally, ES6 introduced `const` as a mechanism for declaring constants:

- Intorduced with ES6.
- Variables can be defined and declared once.
- Scoped to the code block it was declared

It's a best practice to use `let` and `const` in lieu of `var` on future work.

Prior to ES6 developers employed ES5 functions:

```javascript
function foo () {
    console.log('This is an traditional ES5 function.');
}
```

- ES5 functions can be named
- ES5 functions can be assgined to variables
- ES5 functions can be anonymous
- The `arguments` object IS bound to the function's parameters.
- `this` object is bound to the function's scope. If the function were defined as an object method, it would bind to the object's `this`. 
 
However ES6 introduced **Arrow Functions** 

```javascript
const foo = () => {
    console.log('This is an arrow function.');
}
```

Arrow functiosn have the following character: 

- Syntax introduced in ES6
- Arrow functions are anonymous
- To reference an arrow function for later use, you have to assign it to a variable
- Arrow functions include a shorthand syntax: `const f = (x, y) => x * y;`
- Parameters are not bound to the `arguments` array.
- Binds to the parent context's `this` value. If the parent had a value for this, that is what is in your arrow function.

ES6 introduced a new way to declare object methods:

```javascript
const foo = {
  things: "something",
  ES5Way: function() {
    return this.things;
  },
  ES6Way() {
    return this.things;
  }
}
```

The syntax is a little different. Both methods can continue to be used, and each method produces the exact same method.

```javascript
const multiplier = {
  numbers: [1, 3, 33, 4, 2],
  multiplyer: 4,
  multiply() {
  	return this.numbers.map( number => number * this.multiplyer );
  }
}

console.log(multiplier.multiply());
```

ES6 introduced *classes*. Classes are a mechanism for defining the properties and methods of an object. They following the syntax:

```javascript
class Foo {
  constructor(things, thangs) {
    this.things = things;
    this.thangs = thangs;
  }
  method1() {
    return;
  }
  method2() {
    return;
  }
}
```

Classes have the following declaration characteristics:

- You have to use the ES6 method definition syntax for method definition.
- There are no commas between properties and methods in a class
- There are no semi-colons after methods in a class

You can use classes with React to declare React components.

> **NOTE:** It's a best practice (and required with React) to make the first letter of the class' name upper case.

#### JavaScript Tips and Tricks

You can turn an variable assigned `undefined` into a truthy or falshy value with this nifty trick:

```javascript
const foo = undefined;
console.log(!!foo);
```

Use this when you want to return `true` or `false` inferred from a variable or property that might be undefined.

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
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Indecision App</title>
</head>

<body>
  <div id="app"></div>
  <script src="https://unpkg.com/react@15/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
  <script src="/scripts/app.js"></script>
</body>

</html>
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

The template is converted to JavaScript (using Babel), which is interpreted by your browser. The following is an example:

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
yarn init --yes`
yarn add babel-preset-react@6.24.1
yarn add babel-preset-env@1.5.2
```
You can also install both presets through one command:
```
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```

If you need to rebuild the `node_modules` folder, you can just run `yarn install`; just like with `npm`.

> Yarn seems to work like `npm`. Initializing a project creates a `package.json` file. When you install a module with `yarn`, you end up with a `yarn.lock` file, which stores installed module dependencies.

**Best Practice**: You can save template text to a variable with code like the following:

```javascript
const template = <div>
    <p>{name}</p>
    <p>{age}</p>
    <p>Some static text</p>
  </div>;
```

Andrew recommended using parenthesis to give the template code a little more clarity:

```javascript
const template = (
  <div>
    <p>Some static text</p>
  </div>
);
```

You can leverage JavaScript expressions in your template render data. JavaScript expressions are placed between curly braces `{}`:

```javascript
const foo = 'test';

const template = (
  <div>
    <p>{foot}</p>
    <p>Some static text</p>
  </div>
);
```

JSX can render the following:

- JSX can render static variables
- JSX can render properties from JavaScript objects
- JSX can render JSX
- JSX can render JavaScript arrays

> **NOTE**: Its important to note that **JSX cannot render JavaScript objects**.

You can place javascript comments in a JSX expression.

The following is an example rendering a JavaScript array containing JSX:

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

When you render JSX inside an array, you should specify the `key` attribute so React has a unique identifier for each element.

You can conditionally render data and parts of a template using...

```javascript
// Functions
{getThing(user.thing)}
```
```javascript
// Logical Operators
{user.age > 0 && <p>Age: {user.age}</p>}
```
```javascript
// Ternery Operator
<p>{user.name ? user.name : "unknown"}</p>
```

These are the tools you'll use to conditionally display content based on the state of your data.

Template have the following characteristics:

- *Some* template attributes have the same name as in HTML e,g, `id`.
- *Some* template attributes do not have the same name as in HTML e.g., `class` is `className`.
- You can find the JSX firendly attribute names for HTML attributes in [React's Documentation](https://react-cn.github.io/react/docs/tags-and-attributes.html).

In the JSX examples, it looks like React forces developers to re-render the entire page, when a change occurs. That isn't the case. React employs a *virtual DOM*:

- React uses a virtal DOM to only update the portions of the page that changed.
- The diff-rendering is a performance feature of React.

React renders JSX, which are composed of HTML elements and React Components. A React componets is an atomic piece of functionality. You represent a component in a template with its own tag. Let's say you want to reference a component named `ComponentName`:

```javascript
const template = (
  <div>
    <p>Something</p>
    <CompomentName />
  </div>
);
```

A React component can contain other components creating a kind-of component hierarchy: 

- We can create components that host other components
- The parent component contains all other components on the page. 

Parent components can send data to sub-components through the use of properties or **props**. Props are readonly elements passed from a parent to a child. For example, in the following we're passing data in a `MyPropertyName` component:

```javascript
const template = (
  <div>
    <p>Something</p>
    <CompomentName MyPropertyName="some-data" />
  </div>
);
```

Sub-components reference the data by accessing the `props` object:

```javascript
<p>My property name is {this.props.MyPropertyName}!</p>
```

Data passed to a component can be literal (like in the example) or a JavaScript expression. The sub-component can only reference (not change) data provided in props.

Components can be implemented in one of two ways:

1. *Class Components*, use for components that need to maintain state.
2. *Stateless Functional Components (SFC)*, used for components that don't need to maintain state.

Class components can have state (data) while SFC's cannot. No one component type is better than another. However, you'll bias certain components depending on what you're trying to accomplish.

### Class Components

Class components are defined by creating a JavaScript class that extends React's component class. Class components must have two things:

- Class component's names must start with a capitol letter
- Class components must include a `render()` method

You declare a component using the ES6 class syntax:

```javascript
class Things extends React.Component {
  render() {
    return (
      <p>test</P>
    );
  }
}
```

Class components can contain methods beside `render()`. You can pass method references in JSX templates through JavaScript expressions. 

It's common to pass method references with-in and between React components. If a method references a class' `this` object and you plan to pass a reference to the method outside the object, you need to bind it to the object's `this` object.

If a template references a function that references object properties using the `this` object, you need to bind the function's `this` object. This is because the referencer doesn't have access to the method's object's this scope.

You can use [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) to assign a `this` to a function.

```javascript
this.myMethod.bind(this)
```

You can do this in a few places. Andrew recommends setting it in the class' constructor:

```javascript
class Foo extends React.Component {
  constructor(props) {
    super(props);

    this.myMethod = this.myMethod.bind(this);
  }
  myMethod() {
    return this.props.deezNutz;
  }
}
```

You an alternatively place the `.bind(this)` in the place where you're referencing the method; however, that has performance implications.

You can send data to sub-components using props. You can use function objects to send data from sub-components to parent components.

```javascript
class App extends React.Component {
  render() {
    return (
      <This />
      <That MyName="Adam"/>
    );
  }
}
class This extends React.Component {
  render() {
    return (
      <p>This is the "This" component.</P>
    );
  }
}
class That extends React.Component {
  render() {
    return (
      <p>This is the "That" componet. My name is {this.props.MyName}.</P>
    );
  }
}
```

React Component State
- Components will re-render if their state changes
 > You have to setup a component with a default state; series of key/value pairs.
 > This will be what the component is initially rendered with.
 > State changes in response to an event e.g., button click.
 > Component re-renders with new state values

### Stateless Functional Components

```javascript
const Things = (props) => {
  return (
    <p>test</p>
  );
}
```

> **NOTE:** You need to name your Static Functional Components (SFC) with a capitol letter, just like class components.

### Raw

Class components allow life cycle methods
Life cycle method fires at certain times in a component's life
 - first rendered, re-rendered, removed from screen, etc.
SFC's are fast because they don't have to maintain state or life cycle methods

- componentDidMount(), when a component first loads
- componentDidUpdate(), when the component is updated
- componentWillUnmount(), fires when a subject component terminates/unloads.
    - This doesn't happen for all components.

These methods take the following option properties:

prevProps, previous props
prevState, previous state

You always have access to the object's current `state` amd `props` objects.

```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.options.length !== this.state.options.length) {
    console.log("Change occurred");
  }
}
```

Using Local Storage

Local storage is a key value store.
It persists between page loads.
Local storage only works with string data.
If you're saying an object or array, you can use `JSON.stringify()` to turn the object or array into a string, which you can save.

```javascript
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();
```

```javascript
componentDidMount() {
  try {
    const optionsJSON = localStorage.getItem('options');
  
    if (optionsJSON) {
      this.setState( () => ({ options: JSON.parse(optionsJSON) });
    }
  } catch(e) {
    // Don't do a damn thing
  }
}
componentDidUpdate(prevProps, prevState) {
  if (prevState.options.length !== state.options.length) {
    const optionsJSON = JSON.stringify(this.state.options);
    localStorage.setItem('options', optionsJSON);
  }
}
```

## Web Pack

Web Pack lets developers...

- Web Pack is an asset bundler. Packages your JavaScript files into a bundle.js file.
- Web Pack lets developers organize components into separate files.
- Lets developers download modules via yarn and/or npm
- Lets us take advantage of thirdparty libraries in our project.

You have to create a configuration file so Web Pack knows what to do.
The configuration file is a Node.js script.
The config needs...
 - Entry point
 - Output location

https://webpack.js.org/

There is an ordering to the javascript files you load in your html file.

You want to locally install all the modules that someone else would need to run your project.
You can setup aliases to run modules registered by your project.

You can uninstall the global modules with the following:

```javascript
yarn global remove babel-cli live-server

npm uninstall -g babel-cli live-server
```

```javascript
yarn add live-server@1.2.0 babel-cli@6.24.1
```

```javascript
"scripts": {
  "serve": "live-server public/",
  "build": "babel src/app.js --out-file=public/scripts/app.js --presets=\"env,react\" --watch",
}
```

yarn run serve
yarn run build

install npm module
modify one of your React scripts to import the module
 - check the modules docs to determine how to import it

```javascript
import validator from 'validator';
```

yarn add react@16.0.0 react-dom@16.0.0

you can use a laoder in your webpack configuration file to run a javascript file through babel
 - babel-core
 - babel-loader

Use the `.bablrc` to specify presets to be loaded by the laoder

This produces a dev build

its a common practice to put one component in a given file.
you need to add the React import to all components since those files use the react module

- when you get an error, the error will be reported to its location in the webpack bundle.
- you can use a source map to better show the error's location in the source
> devtool
> make the change in the web pack configuration file
When you modify the web pack config, you need to restart web pack (even if running under watch) for the change to get picked up.
All modern browsers support source maps (not just chrome)
Source maps let you find where (in the source files) an error occurred.

Web pack ships with a little development server.
Web pack's docs provide information about the DevServer.
 - Setup instructions
You need the 'webpack-dev-server'
You need to tell the server where you HTML files are
 - You make that change in the web pack cofngiuration file

```javascript
devServer: {
  contentBase: path.join(__dirname, 'public')
}
```

The web pack development servers runs content from memory.
It doesn't create a packaged file.


## Questions

1. Can live-server only serve up a directory named `public`?
2. Why can't you add the params to the functions in the event handler?