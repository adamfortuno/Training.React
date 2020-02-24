"use strict";

console.log("app.js is running.");

// Where I define the target of my template/stuff
const appRoot = document.getElementById('app');

// Template One
const app = {
    title: "Sabrina's Big Day",
    subtitle: "Adventure",
    options: ['Suzie', 'Billy', 'Micky']
};

function getSubTitle(app) {
    if ( [null, undefined, ""].includes(app.subtitle) === false ) {
        return <p>{app.subtitle}</p>;
    }
}

function getOptions(app) {
    if (app.options && app.options.length > 0) {
        return (
            <ol>
                { app.options.join() }
            </ol>
        );
    }
}

const templateOne = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ (app.options && app.options.length > 0) ? "Here are your options" : "No options" }</p>
        { getOptions(app) }
    </div>
);

// Template Two
let count = 0;

const renderPage = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="button-minus" className="button" onClick={countPlus}>
                Increment
            </button>
            <button id="buttom-reset" className="button" onClick={countReset}>
                Reset
            </button>
            <button id="button-minus" className="button" onClick={countMinus}>
                Decrement
            </button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
};

const countReset = () => {
    count = 0;
    renderPage();
};

const countMinus = (number = 1) => {
    count--;
    renderPage();
};

const countPlus = (number = 1) => {
    count++;
    renderPage();
};

renderPage();