"set strict";

console.log('The Indicision App is running.');

const appRoot = document.getElementById('app');

const now = new Date();

const app = {
    options: []
}

const onOptionAdd = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option && option != "") {
        app.options.push(option);
        event.target.elements.option.value = '';
    }

    selfRender();
};

const onOptionClear = () => {
    app.options = [];
    selfRender();
}

const onOptionSelect = () => {
    const options_count = app.options.length;
    
    if (options_count > 0) {
        const random_number =
            Math.floor(Math.random() * options_count);
        
        const option = app.options[random_number];

        console.log(option);
    }
};

const selfRender = () => {
    let item = 0;
    const template = (
        <div>
            <h1>Indecision App - {now.toISOString()}</h1>
            <form onSubmit={onOptionAdd}>
                <input type="text" name="option" />
                <br/>
                <button>Add Option</button> 
                <button onClick={onOptionClear}>Clear Options</button>
                <button disabled={app.options.length === 0} onClick={onOptionSelect}>Select Random Option</button>
            </form>
            <h2>{app.options.length > 0 ? `Options:` : null}</h2>
            <ol>
            {
                app.options.map( (option) => <li key={++item}>{option}</li>)
            }
            </ol>
            

        </div>
    );

    ReactDOM.render(template, appRoot);
}

selfRender();