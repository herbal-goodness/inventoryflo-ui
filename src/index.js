import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/iconic/font/css/open-iconic-bootstrap.min.css';
import './assets/index.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './components/App';
import InventoryFlo from './components/InventoryFlo';

render(
	<Router>
		<InventoryFlo />
	</Router>,
	document.getElementById('root'),
);
