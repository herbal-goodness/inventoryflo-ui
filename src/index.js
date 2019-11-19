import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import InventoryFlo from './components/InventoryFlo';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<Router>
			<InventoryFlo />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
