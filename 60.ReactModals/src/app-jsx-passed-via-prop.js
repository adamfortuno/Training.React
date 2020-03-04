'use strict';

import ReactDOM from 'react-dom';

console.log('First Approach - Passing JSX as a Named Prop.');

const Foo = () => {
    return (
        <p>My Foo Content!</p>
    );
};

const App = (props) => {
    return (
        <div>
            <h1>My new application!</h1>
            {props.content}
            <p>By Adam</p>
        </div>
    );
};

ReactDOM.render(<App content={<Foo/>} />, document.getElementById('app'));