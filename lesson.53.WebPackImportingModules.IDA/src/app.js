'use strict';

import ReactDOM from 'react-dom';
import Self from './components/Self';

console.log('The Indicision App is running.');

ReactDOM.render(<Self options={['Watch TV', 'Take Nap', 'Have a Snack']} />, document.getElementById('app'));