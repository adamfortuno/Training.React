'use strict';

console.log('The visibility app is running.');

let visibility = true;

const toggleMessage = () => {
    visibility = !visibility;
    selfRender();
};

const selfRender = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleMessage}>{visibility ? "Hide Details" : "Show Details"}</button>
            <p>{visibility ? "DeezNutz!" : null}</p>
        </div>
    );
    
    ReactDOM.render(jsx, document.getElementById('app'));
};

selfRender();