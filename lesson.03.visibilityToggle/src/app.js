'use strict';

console.log('The visibility app is running.');

const appRoot = document.getElementById('app');
let showMessage = true;
const message = "DeezNutz!";

const toggleMessage = () => {
    showMessage = !showMessage;
    selfRender();
};

const selfRender = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleMessage}>Toggle Message</button>
            <p>{(showMessage) ? message : null}</p>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

selfRender();