'use strict';

console.log('The visibility app is running.');

var visibility = true;

var toggleMessage = function toggleMessage() {
    visibility = !visibility;
    selfRender();
};

var selfRender = function selfRender() {
    var jsx = React.createElement(
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
            visibility ? "Hide Details" : "Show Details"
        ),
        React.createElement(
            'p',
            null,
            visibility ? "DeezNutz!" : null
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

selfRender();
