'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var now = new Date();

console.log("Started application at %s", now.toISOString());

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
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var options = this.props.options;

            return React.createElement(
                "div",
                null,
                options.map(function (opt, idx) {
                    return React.createElement(Option, { key: idx, option: opt });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

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

var Self = function (_React$Component5) {
    _inherits(Self, _React$Component5);

    function Self() {
        _classCallCheck(this, Self);

        return _possibleConstructorReturn(this, (Self.__proto__ || Object.getPrototypeOf(Self)).apply(this, arguments));
    }

    _createClass(Self, [{
        key: "render",
        value: function render() {
            var title = 'In-decision App';
            var subtitle = 'Let chance decide your fate';
            var options = ['one', 'two', 'three'];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return Self;
}(React.Component);

ReactDOM.render(React.createElement(Self, null), document.getElementById('app'));
