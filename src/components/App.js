import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Login from './login/Login';
import Products from './products/Products';
import Summary from './summary/Summary';
import Contacts from './contacts/Contacts';
import Warehouses from './warehouses/Warehouses';
import Orders from './orders/Orders';
import Transfers from './transfers/Transfers';
import NotFound from './NotFound';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/products" component={Products} />
				<Route path="/inventory" component={Summary} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/warehouses" component={Warehouses} />
				<Route path="/purchase-orders" component={Orders} />
				<Route path="/transfers" component={Transfers} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
