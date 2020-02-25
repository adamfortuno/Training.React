'use strict';

const now = new Date();

console.log("Started application at %s", now.toISOString());

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Let chance decide your fate</h2>
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>Option</div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
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
        return (
            <div>
                <Header />
                <Options />
                <AddOption />
            </div>
        );
    }
}

ReactDOM.render(<Self />, document.getElementById('app'));
