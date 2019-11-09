import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './global/Header';
import Items from './items/Items';
import Contacts from './contacts/Contacts';

const InventoryFlo = () => {

	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path="/" />
				<Route exact path="/login" />
				<Route path="/items" component={Items} />
				<Route path="/contacts" component={Contacts}/>
				<Route path="/inventory-summary" />
				<Route path="/warehouses" />
				<Route path="/purchase-orders" />
				<Route path="/transfers" />
			</Switch>
		</Fragment>
	);
};

export default InventoryFlo;
