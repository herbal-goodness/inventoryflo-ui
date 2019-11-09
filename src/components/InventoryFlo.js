import React, { Fragment, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from './global/Login';
import Header from './global/Header';
import Items from './items/Items';
import Contacts from './contacts/Contacts';

const InventoryFlo = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<Fragment>
			<Header loggedIn={loggedIn} logOut={() => setLoggedIn(false)} />
			<Switch>
				{ loggedIn && (
					<Fragment>
						<Redirect exact from="/" to="/items" />
						<Route path="/inventory-summary" />
						<Route path="/items" component={Items} />
						<Route path="/contacts" component={Contacts}/>
						<Route path="/warehouses" />
						<Route path="/purchase-orders" />
						<Route path="/transfers" />
					</Fragment>
				)}
				<Route
					path="/"
					render={({ history }) => (
						loggedIn === true
							? <Redirect to="/inventory-summary" />
							: <Login history={history} setLogin={setLoggedIn} />
					)}
				/>
			</Switch>
		</Fragment>
	);
};

export default InventoryFlo;
