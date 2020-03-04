'use strict';

const now = new Date();

console.log("Started application at %s", now.toISOString());

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                {options.map( (opt, idx) => <Option key={idx} option={opt} />) }
            </div>
        );
    }
}

class AddOption extends React.Component {
    optionAdd(event) {
        event.preventDefault();
        
        const option =
            event.target.elements.option.value.trim();

        if ( !!option ) {
            alert(`Add an option: ${option}`);
        }
    }
    optionReset() {
        alert('Reset Options');
    }
    render() {
        return (
            <div>
            <form id="AddOption" onSubmit={this.optionAdd}>
                <input name="option" type="text"></input>
                <button>Add</button>
            </form>
            <button onClick={this.optionReset}>Reset</button>
            </div>
        );
    }
}

class Self extends React.Component {
    render() {
        const title = 'In-decision App';
        const subtitle = 'Let chance decide your fate';
        const options = ['first', 'second', 'third'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

ReactDOM.render(<Self />, document.getElementById('app'));
