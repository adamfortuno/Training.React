'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('The Indicision App is running.');

var Self = function (_React$Component) {
    _inherits(Self, _React$Component);

    function Self(props) {
        _classCallCheck(this, Self);

        var _this = _possibleConstructorReturn(this, (Self.__proto__ || Object.getPrototypeOf(Self)).call(this, props));

        _this.state = {
            options: props.options,
            start: props.start
        };

        _this.optionClear = _this.optionClear.bind(_this);
        _this.optionSelect = _this.optionSelect.bind(_this);
        _this.optionAdd = _this.optionAdd.bind(_this);
        return _this;
    }

    _createClass(Self, [{
        key: 'optionClear',
        value: function optionClear() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'optionSelect',
        value: function optionSelect() {
            var options_count = this.state.options.length;

            if (options_count > 0) {
                var random_number = Math.floor(Math.random() * (options_count - 1) + 1);

                var option = this.state.options[random_number];

                alert(option);
            }
        }
    }, {
        key: 'optionAdd',
        value: function optionAdd(newOption) {
            if ([null, undefined, ''].includes(newOption)) {
                throw new Error("You cannot add empty or missing options.");
            }

            if (this.state.options.includes(newOption)) {
                throw new Error("The option already exists.");
            }

            this.setState(function (ps) {
                return {
                    options: ps.options.concat(newOption)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(OptionEntry, {
                    optionCount: this.state.options.length,
                    optionClear: this.optionClear,
                    optionSelect: this.optionSelect,
                    optionAdd: this.optionAdd
                })
            );
        }
    }]);

    return Self;
}(React.Component);

Self.defaultProps = {
    counter: [],
    start: new Date()
};

var Header = function Header() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Indicision App'
        )
    );
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Indicision App</h1>
//             </div>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'p',
        null,
        props.option
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <p>{this.props.option}</p>
//         );
//     }
// }

var Options = function Options(props) {
    var options = props.options;

    return React.createElement(
        'div',
        null,
        options.map(function (opt, idx) {
            return React.createElement(Option, { key: idx, option: opt });
        })
    );
};

// class Options extends React.Component {
//     render() {
//         const options = this.props.options;

//         return (
//             <div>
//                 {options.map((opt, idx) => <Option key={idx} option={opt} />)}
//             </div>
//         );
//     }
// }

var OptionEntry = function (_React$Component2) {
    _inherits(OptionEntry, _React$Component2);

    function OptionEntry(props) {
        _classCallCheck(this, OptionEntry);

        var _this2 = _possibleConstructorReturn(this, (OptionEntry.__proto__ || Object.getPrototypeOf(OptionEntry)).call(this, props));

        _this2.optionAdd = _this2.optionAdd.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(OptionEntry, [{
        key: 'optionAdd',
        value: function optionAdd(event) {
            event.preventDefault();

            this.setState(function () {
                return { "error": undefined };
            });

            try {
                this.props.optionAdd(event.target.elements.option.value.trim());
                event.target.elements.option.value = '';
            } catch (error) {
                console.error(error.message);

                this.setState(function () {
                    return { "error": error.message };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    { style: { color: "red" } },
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.optionAdd },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.optionClear },
                    'Clear'
                ),
                React.createElement(
                    'button',
                    { disabled: this.props.optionCount === 0, onClick: this.props.optionSelect },
                    'Feeling Lucky'
                )
            );
        }
    }]);

    return OptionEntry;
}(React.Component);

ReactDOM.render(React.createElement(Self, { options: ['Watch TV', 'Take Nap', 'Have a Snack'] }), document.getElementById('app'));
