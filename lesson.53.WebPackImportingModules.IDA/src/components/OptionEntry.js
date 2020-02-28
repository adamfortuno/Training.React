import react from 'react';

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

        this.setState(() => ({ "error": undefined }) );

        try {
            this.props.optionAdd(event.target.elements.option.value.trim());
            event.target.elements.option.value = '';
        } catch (error) {
            console.error(error.message);

            this.setState(() => ({ "error": error.message }) );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
                <form onSubmit={this.optionAdd}>
                    <input type="text" name="option" />
                    <button>Add</button>
                </form>

                <button onClick={this.props.optionClear}>Clear</button>
                <button disabled={this.props.optionCount === 0} onClick={this.props.optionSelect}>Feeling Lucky</button>
            </div>
        );
    }
}

export default OptionEntry;