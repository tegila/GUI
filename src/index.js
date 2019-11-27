import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login/Login'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
