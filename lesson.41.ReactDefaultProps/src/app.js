'use strict';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.counterIncrement = this.counterIncrement.bind(this);
        this.counterDecrement = this.counterDecrement.bind(this);
        this.counterReset = this.counterReset.bind(this);

        this.state = {
            counter: this.props.counter
        };
    }
    counterIncrement() {
        this.setState( ps => ps.counter += 1 );
    }
    counterDecrement() {
        this.setState( ps => ps.counter -= 1 );
    }
    counterReset() {
        this.setState( ps => {
            return { counter: 0 };
        });
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.counterIncrement}>+1</button>
                <button onClick={this.counterDecrement}>-1</button>
                <button onClick={this.counterReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    counter: 0
};

class Self extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Counter counter={this.props.counter}/>
        );
    }
}

ReactDOM.render(<Self counter="2"/>, document.getElementById('app'));
// ReactDOM.render(<Self />, document.getElementById('app'));