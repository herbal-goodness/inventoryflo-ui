import React, { useState } from 'react';
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
import getItems from '../api/Items';
import getOrders from '../api/Orders';

function App() {
	const [items, setItems] = useState(getItems());
	const [orders, setOrders] = useState(getOrders());
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route
					path="/items/new"
					render={() => <NewItem items={items} setItems={setItems} />}
				/>
				<Route
					path="/items/:sku"
					render={props => (
						<ItemSummary {...props} items={items} setItems={setItems} />
					)}
				/>
				<Route
					path="/items"
					render={() => <ItemsList items={items} setItems={setItems} />}
				/>
				<Route
					path="/inventory"
					render={() => <Summary items={items} order={orders} />}
				/>
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
