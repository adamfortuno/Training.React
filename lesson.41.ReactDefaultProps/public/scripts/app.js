'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.counterIncrement = _this.counterIncrement.bind(_this);
        _this.counterDecrement = _this.counterDecrement.bind(_this);
        _this.counterReset = _this.counterReset.bind(_this);

        _this.state = {
            counter: _this.props.counter
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'counterIncrement',
        value: function counterIncrement() {
            this.setState(function (ps) {
                return ps.counter += 1;
            });
        }
    }, {
        key: 'counterDecrement',
        value: function counterDecrement() {
            this.setState(function (ps) {
                return ps.counter -= 1;
            });
        }
    }, {
        key: 'counterReset',
        value: function counterReset() {
            this.setState(function (ps) {
                return { counter: 0 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter: ',
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    { onClick: this.counterIncrement },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.counterDecrement },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.counterReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    counter: 0
};

var Self = function (_React$Component2) {
    _inherits(Self, _React$Component2);

    function Self(props) {
        _classCallCheck(this, Self);

        return _possibleConstructorReturn(this, (Self.__proto__ || Object.getPrototypeOf(Self)).call(this, props));
    }

    _createClass(Self, [{
        key: 'render',
        value: function render() {
            return React.createElement(Counter, { counter: this.props.counter });
        }
    }]);

    return Self;
}(React.Component);

ReactDOM.render(React.createElement(Self, { counter: '2' }), document.getElementById('app'));
// ReactDOM.render(<Self />, document.getElementById('app'));
