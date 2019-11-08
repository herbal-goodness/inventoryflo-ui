import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './common/Header';
import Items from './items/Items';

const InventoryFlo = () => {

	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path="/" />
				<Route exact path="/login" />
				<Route path="/items" component={Items} />
				<Route path="/inventory-summary" />
				<Route path="/contacts" />
				<Route path="/warehouses" />
				<Route path="/purchase-orders" />
				<Route path="/transfers" />
			</Switch>
		</Fragment>
	);
};

export default InventoryFlo;
