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
                <button disabled={this.props.optionCount === 0} onClick={this.props.optionSelect} className="query-button">Feeling Lucky</button>
                <button className="remove-button" onClick={this.props.optionClear}>Remove All</button>
                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
                <form onSubmit={this.optionAdd}>
                    <input type="text" name="option" />
                    <button className="add-button">Add</button>
                </form>
            </div>
        );
    }
}

export default OptionEntry;