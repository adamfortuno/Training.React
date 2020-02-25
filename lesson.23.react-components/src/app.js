'use strict';

const now = new Date();

console.log("Started application at %s", now.toISOString());

class app extends React.Components {
    render() {
        <div>

        </div>
    }
}

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

class Options extends React.Component {
    render() {
        return (
            <h1>Options</h1>
        );
    }
}

class AddOption extends React.Component {
    render () {
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

ReactDOM.render(<app />, document.getElementById('app'));
