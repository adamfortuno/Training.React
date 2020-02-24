"use strict";

console.log("app.js is running.");

// Where I define the target of my template/stuff
var appRoot = document.getElementById('app');

// Template One
var app = {
    title: "Sabrina's Big Day",
    subtitle: "Adventure",
    options: ['Suzie', 'Billy', 'Micky']
};

function getSubTitle(app) {
    if ([null, undefined, ""].includes(app.subtitle) === false) {
        return React.createElement(
            "p",
            null,
            app.subtitle
        );
    }
}

function getOptions(app) {
    if (app.options && app.options.length > 0) {
        return React.createElement(
            "ol",
            null,
            app.options.join()
        );
    }
}

var templateOne = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options && app.options.length > 0 ? "Here are your options" : "No options"
    ),
    getOptions(app)
);

// Template Two
var count = 0;

var renderPage = function renderPage() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { id: "button-minus", className: "button", onClick: countPlus },
            "Increment"
        ),
        React.createElement(
            "button",
            { id: "buttom-reset", className: "button", onClick: countReset },
            "Reset"
        ),
        React.createElement(
            "button",
            { id: "button-minus", className: "button", onClick: countMinus },
            "Decrement"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

var countReset = function countReset() {
    count = 0;
    renderPage();
};

var countMinus = function countMinus() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    count--;
    renderPage();
};

var countPlus = function countPlus() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    count++;
    renderPage();
};

renderPage();
