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
    render() {
        const addOption = () => {
            event.preventDefault();
        }
        return (
            <form id="AddOption">
                <input name="option" type="text"></input>
                <button onClick={addOption}>Add</button>
            </form>
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
