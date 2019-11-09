import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import InventoryFlo from './components/InventoryFlo';

render(
	<Router>
		<InventoryFlo />
	</Router>,
	document.getElementById('root'),
);
