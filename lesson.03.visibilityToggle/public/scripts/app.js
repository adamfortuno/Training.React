'use strict';

console.log('The visibility app is running.');

var appRoot = document.getElementById('app');
var showMessage = true;
var message = "DeezNutz!";

var toggleMessage = function toggleMessage() {
    showMessage = !showMessage;
    selfRender();
};

var selfRender = function selfRender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleMessage },
            'Toggle Message'
        ),
        React.createElement(
            'p',
            null,
            showMessage ? message : null
        )
    );

    ReactDOM.render(template, appRoot);
};

selfRender();
