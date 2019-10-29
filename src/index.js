import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/iconic/font/css/open-iconic-bootstrap.min.css';
import './assets/index.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import makeStore from './store';
import { Provider } from 'react-redux';
import getItems from './api/Items';

const store = makeStore({ items: getItems() });

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
