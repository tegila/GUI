import React, { Component } from 'react';
import Login from './components/login/Login';
import '../src/components/login/login.sass';
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
	render() {
		return (
			<div id="doido">
				<BrowserRouter>
			<Login />
			<list />
			</BrowserRouter></div>
				
		);
	}
}

export default App;
