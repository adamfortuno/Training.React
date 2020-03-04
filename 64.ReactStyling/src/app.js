'use strict';

import ReactDOM from 'react-dom';
import Self from './components/Self';
// import './styles/style.css'; 
import 'normalize.css/normalize.css';
import './styles/style.scss';


console.log('The Indicision App is running.');

ReactDOM.render(<Self options={['Watch TV', 'Take Nap', 'Have a Snack']} />, document.getElementById('app'));