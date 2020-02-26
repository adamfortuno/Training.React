'use strict';

console.log('The Indicision App is running.');

class Self extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['Eat', 'Goto sleep', 'Watch TV'],
            start: new Date()
        };

        this.optionClear = this.optionClear.bind(this);
        this.optionSelect = this.optionSelect.bind(this);
        this.optionAdd = this.optionAdd.bind(this);
    }

    optionClear() {
        this.setState( () => {
            return { options: [] };
        });
    }

    optionSelect() {
        const options_count = this.state.options.length;

        if (options_count > 0) {
            const random_number =
                Math.floor(Math.random() * (options_count - 1) + 1);

            const option = this.state.options[random_number];

            alert(option);
        }
    }

    optionAdd(newOption) {
        if ( [null, undefined, ''].includes(newOption) ) {
            throw new Error("You cannot add empty or missing options.");
        }

        if ( this.state.options.includes(newOption) ) {
            throw new Error("The option already exists.");
        }

        this.setState( (ps) => {
            return {
                options: ps.options.concat(newOption)
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Options options={this.state.options} />
                <OptionEntry
                    optionCount={this.state.options.length}
                    optionClear={this.optionClear}
                    optionSelect={this.optionSelect}
                    optionAdd={this.optionAdd}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indicision App</h1>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
        <p>{this.props.option}</p>
        );
    }
}

class Options extends React.Component {
    render() {
        const options = this.props.options;

        return (
            <div>
                { options.map( (opt, idx) => <Option key={idx} option={opt} />)}
            </div>
        );
    }
}

class OptionEntry extends React.Component {
    constructor(props) {
        super(props);

        this.optionAdd = this.optionAdd.bind(this);

        this.state = {
            error: undefined
        }
    }

    optionAdd(event) {
        event.preventDefault();

        this.setState( () => {
            return { "error": undefined };
        });

        try {
            this.props.optionAdd(event.target.elements.option.value.trim());
            event.target.elements.option.value = '';
        } catch (error) {
            console.error(error.message);

            this.setState( () => {
                return { "error": error.message };
            });
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p style={{color: "red"}}>{this.state.error}</p> }
                <form onSubmit={this.optionAdd}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>

                <button onClick={this.props.optionClear}>Clear</button>
                <button disabled={this.props.optionCount === 0} onClick={this.props.optionSelect}>Feeling Lucky</button>
            </div>
        );
    }
}

ReactDOM.render(<Self />, document.getElementById('app'));