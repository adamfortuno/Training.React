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

## Questions

1. Can live-server only serve up a directory named `public`?