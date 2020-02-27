'use strict';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.counterIncrement = this.counterIncrement.bind(this);
        this.counterDecrement = this.counterDecrement.bind(this);
        this.counterReset = this.counterReset.bind(this);

        this.state = {
            counter: 0
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
    componentDidMount() {
        const counter = localStorage.getItem('count');
        
        if ( counter && isNaN(1 * counter) === false ) {
            this.setState( () => {
                return { counter: parseInt(counter) };
            });
        }
    }
    componentDidUpdate() {
        console.log('go', this.state.counter);
        localStorage.setItem('count', this.state.counter);
    }
}

class Self extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Counter />
        );
    }
}

ReactDOM.render(<Self />, document.getElementById('app'));