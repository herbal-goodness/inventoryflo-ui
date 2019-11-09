import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Login from './login/Login';
import ItemsList from './items/ItemsList';
import NewItem from './items/NewItem';
import ItemSummary from './items/ItemDetails';
import Summary from './summary/Summary';
import NewContact from './contacts/NewContact';
import Contacts from './contacts/ContactsSummary';
import NewWarehouse from './warehouses/NewWarehouse';
import Warehouses from './warehouses/WarehousesSummary';
import NewOrder from './orders/NewOrder';
import Orders from './orders/OrdersSummary';
import NewTransfer from './transfers/NewTransfer';
import Transfers from './transfers/TransfersSummary';
import NotFound from './NotFound';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/items/new" component={NewItem} />
				<Route path="/items/:sku" component={ItemSummary} />
				<Route path="/items" component={ItemsList} />
				<Route path="/inventory" component={Summary} />
				<Route path="/contacts/new" component={NewContact} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/warehouses/new" component={NewWarehouse} />
				<Route path="/warehouses" component={Warehouses} />
				<Route path="/purchase-orders/new" component={NewOrder} />
				<Route path="/purchase-orders" component={Orders} />
				<Route path="/transfers/new" component={NewTransfer} />
				<Route path="/transfers" component={Transfers} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
