'use strict';

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.messageToggle = this.messageToggle.bind(this);

        this.state = {
            visibility: false,
            message: "DeezNutz!"
        };
    }
    messageToggle() {
        this.setState( ps => ps.visibility = !ps.visibility);
    }
    render() {
        return (
            <div>
                <button onClick={this.messageToggle}>Toggle Visibility</button>
                <h1>Would you like to see my message?</h1>
                <p>{this.state.visibility ? "DeezNutz" : ''}</p>
            </div>
        );
    }
}

ReactDOM.render(<Message />, document.getElementById('app'));