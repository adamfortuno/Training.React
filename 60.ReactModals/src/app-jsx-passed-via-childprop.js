'use strict';

import ReactDOM from 'react-dom';

console.log('Second Approach - Passing JSX as a Child Prop');

const App = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

ReactDOM.render(<App><p>Some sort of content!</p></App>, document.getElementById('app'));