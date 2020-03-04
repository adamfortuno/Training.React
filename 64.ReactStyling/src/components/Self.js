'use strict';

import React from 'react';
import Header from './Header';
import Options from './Options';
import OptionEntry from './OptionEntry';
import OptionModal from './OptionModal';

class Self extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: props.options,
            selectedOption: undefined,
            start: props.start
        };

        this.optionClear = this.optionClear.bind(this);
        this.optionSelect = this.optionSelect.bind(this);
        this.optionAdd = this.optionAdd.bind(this);
        this.optionRemove = this.optionRemove.bind(this);
        this.optionSelectReset = this.optionSelectReset.bind(this);
    }

    optionClear() {
        this.setState(() => ({ options: [] }) );
    }

    optionRemove(optionTarget) {
        console.log("called it!", optionTarget);

        this.setState( (ps) => {
            return {
                options: ps.options.filter( (e) => e !== optionTarget)
            };
        });
    }

    optionSelect() {
        const options_count = this.state.options.length;

        if (options_count > 0) {
            const random_number =
                Math.floor(Math.random() * (options_count - 1) + 1);

            const option = this.state.options[random_number];

            console.log(`User selected ${option}.`)
            this.setState( () => ({ selectedOption: option}) )
        }
    }

    optionSelectReset() {
        this.setState( () => ({ selectedOption: undefined }) );
    }

    optionAdd(newOption) {
        if ([null, undefined, ''].includes(newOption)) {
            throw new Error("You cannot add empty or missing options.");
        }

        if (this.state.options.includes(newOption)) {
            throw new Error("The option already exists.");
        }

        this.setState((ps) => ({ options: ps.options.concat(newOption) }) );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                <Options
                    options={this.state.options}
                    optionRemove={this.optionRemove}
                />
                <OptionEntry
                    optionCount={this.state.options.length}
                    optionClear={this.optionClear}
                    optionSelect={this.optionSelect}
                    optionAdd={this.optionAdd}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    optionSelectReset={this.optionSelectReset}
                />
                </div>
            </div>
        );
    }

    componentDidMount() {
        const optionsJSON = localStorage.getItem('options');

        if ( optionsJSON ) {
            this.setState(() => {
                return { options: JSON.parse(optionsJSON) };
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.options.length !== this.state.options.length ) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }
}

Self.defaultProps = {
    counter: [],
    start: new Date()
};

export default Self;