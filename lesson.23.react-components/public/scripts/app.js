'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var now = new Date();

console.log("Started application at %s", now.toISOString());

var app = function (_React$Components) {
    _inherits(app, _React$Components);

    function app() {
        _classCallCheck(this, app);

        return _possibleConstructorReturn(this, (app.__proto__ || Object.getPrototypeOf(app)).apply(this, arguments));
    }

    _createClass(app, [{
        key: "render",
        value: function render() {
            React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Options, null),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return app;
}(React.Components);

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Let chance decide your fate"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "Options"
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            var addOption = function addOption() {
                event.preventDefault();
            };
            return React.createElement(
                "form",
                { id: "AddOption" },
                React.createElement("input", { name: "option", type: "text" }),
                React.createElement(
                    "button",
                    { onClick: addOption },
                    "Add"
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement("app", null), document.getElementById('app'));
