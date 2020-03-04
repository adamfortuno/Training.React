/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exportExplicit_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exportObject_js__ = __webpack_require__(4);





// Named export, the name has to match what was exported in the source
// Default export, the name can be whatever you want
// You can have a single default export

const age = 19;

console.log("Age is %i", age);
console.log('Is An Adult: ', __WEBPACK_IMPORTED_MODULE_0__exportExplicit_js__["b" /* isAdult */](age));
console.log('Can Legally Drink: ', __WEBPACK_IMPORTED_MODULE_0__exportExplicit_js__["a" /* canDrink */](age));

console.log('Adding: ', __WEBPACK_IMPORTED_MODULE_1__exportObject_js__["a" /* add */](1, 2));
console.log('Subtract: ', __WEBPACK_IMPORTED_MODULE_1__exportObject_js__["b" /* default */](1, 2));

// class Self extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             options: props.options,
//             start: props.start
//         };

//         this.optionClear = this.optionClear.bind(this);
//         this.optionSelect = this.optionSelect.bind(this);
//         this.optionAdd = this.optionAdd.bind(this);
//         this.optionRemove = this.optionRemove.bind(this);
//     }

//     optionClear() {
//         this.setState(() => ({ options: [] }) );
//     }

//     optionRemove(optionTarget) {
//         console.log("called it!", optionTarget);

//         this.setState( (ps) => {
//             return {
//                 options: ps.options.filter( (e) => e !== optionTarget)
//             };
//         });
//     }

//     optionSelect() {
//         const options_count = this.state.options.length;

//         if (options_count > 0) {
//             const random_number =
//                 Math.floor(Math.random() * (options_count - 1) + 1);

//             const option = this.state.options[random_number];

//             alert(option);
//         }
//     }

//     optionAdd(newOption) {
//         if ([null, undefined, ''].includes(newOption)) {
//             throw new Error("You cannot add empty or missing options.");
//         }

//         if (this.state.options.includes(newOption)) {
//             throw new Error("The option already exists.");
//         }

//         this.setState((ps) => ({ options: ps.options.concat(newOption) }) );
//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Options
//                     options={this.state.options}
//                     optionRemove={this.optionRemove}
//                 />
//                 <OptionEntry
//                     optionCount={this.state.options.length}
//                     optionClear={this.optionClear}
//                     optionSelect={this.optionSelect}
//                     optionAdd={this.optionAdd}
//                 />
//             </div>
//         );
//     }
// }

// Self.defaultProps = {
//     counter: [],
//     start: new Date()
// };

// const Header = () => {
//     return (
//         <div>
//             <h1>Indicision App</h1>
//         </div>
//     );
// };

// // class Header extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1>Indicision App</h1>
// //             </div>
// //         );
// //     }
// // }

// const Options = (props) =>  {
//     const options = props.options;

//     return (
//         <div>
//             {options.map((opt) => <Option key={opt} option={opt} optionRemove={props.optionRemove}/>)}
//         </div>
//     );    
// };

// // class Options extends React.Component {
// //     render() {
// //         const options = this.props.options;

// //         return (
// //             <div>
// //                 {options.map((opt, idx) => <Option key={idx} option={opt} />)}
// //             </div>
// //         );
// //     }
// // }

// const Option = (props) => {
//     return (
//         <div>
//         <p>{props.option}</p>
//         <button onClick={(e) => ( props.optionRemove(props.option) )}>Remove</button>
//         </div>
//     );
// };

// // class Option extends React.Component {
// //     render() {
// //         return (
// //             <p>{this.props.option}</p>
// //         );
// //     }
// // }

// class OptionEntry extends React.Component {
//     constructor(props) {
//         super(props);

//         this.optionAdd = this.optionAdd.bind(this);

//         this.state = {
//             error: undefined
//         }
//     }

//     optionAdd(event) {
//         event.preventDefault();

//         this.setState(() => ({ "error": undefined }) );

//         try {
//             this.props.optionAdd(event.target.elements.option.value.trim());
//             event.target.elements.option.value = '';
//         } catch (error) {
//             console.error(error.message);

//             this.setState(() => ({ "error": error.message }) );
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
//                 <form onSubmit={this.optionAdd}>
//                     <input type="text" name="option" />
//                     <button>Add</button>
//                 </form>

//                 <button onClick={this.props.optionClear}>Clear</button>
//                 <button disabled={this.props.optionCount === 0} onClick={this.props.optionSelect}>Feeling Lucky</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Self options={['Watch TV', 'Take Nap', 'Have a Snack']} />, document.getElementById('app'));

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isAdult = (age) => age >= 18;
/* harmony export (immutable) */ __webpack_exports__["b"] = isAdult;

const canDrink = (age) => age >= 21;
/* harmony export (immutable) */ __webpack_exports__["a"] = canDrink;


// canBreath()
/* unused harmony default export */ var _unused_webpack_default_export = (() => true);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subtract; });
console.log('utils.js is running.');

const square = (number) => {
    return number * number;
};

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => a - b;


// export { square, add };

/***/ })
/******/ ]);