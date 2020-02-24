'use strict';
"set strict";

console.log('The Indicision App is running.');

var appRoot = document.getElementById('app');

var now = new Date();

var app = {
    options: []
};

var onOptionAdd = function onOptionAdd(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;

    if (option && option != "") {
        app.options.push(option);
        event.target.elements.option.value = '';
    }

    selfRender();
};

var onOptionClear = function onOptionClear() {
    app.options = [];
    selfRender();
};

var onOptionSelect = function onOptionSelect() {
    var options_count = app.options.length;

    if (options_count > 0) {
        var random_number = Math.floor(Math.random() * options_count);

        var option = app.options[random_number];

        console.log(option);
    }
};

var selfRender = function selfRender() {
    var item = 0;
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Indecision App - ',
            now.toISOString()
        ),
        React.createElement(
            'form',
            { onSubmit: onOptionAdd },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement('br', null),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: onOptionClear },
                'Clear Options'
            ),
            React.createElement(
                'button',
                { disabled: app.options.length === 0, onClick: onOptionSelect },
                'Select Random Option'
            )
        ),
        React.createElement(
            'h2',
            null,
            app.options.length > 0 ? 'Options:' : null
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: ++item },
                    option
                );
            })
        )
    );

    ReactDOM.render(template, appRoot);
};

selfRender();
