import React, { Fragment, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { getCredentials } from '../services/authentication.service';
import Login from './global/Login';
import Header from './global/Header';
import Items from './items/Items';
import Contacts from './contacts/Contacts';

const InventoryFlo = () => {
	const [loggedIn, setLoggedIn] = useState();

	useEffect(() => {
		console.log('loggedIn:', loggedIn);
		setLoggedIn(getCredentials());

	}, [loggedIn]);

	return (
		<Fragment>
			<Header loggedIn={loggedIn} logOut={() => setLoggedIn(false)} />
			<Switch>
				{ loggedIn === true && (
					<Fragment>
						<Route path="/inventory-summary" />
						<Route path="/items" component={Items} />
						<Route path="/contacts" component={Contacts}/>
						<Route path="/warehouses" />
						<Route path="/purchase-orders" />
						<Route path="/transfers" />
						<Route exact path="/" render={() => <Redirect to="/inventory-summary" />} />
					</Fragment>
				)}
				{ loggedIn === false && (
					<Route
						path="/"
						render={({ history }) => (
							loggedIn === false && (
								<Login history={history} setLogin={setLoggedIn} />
							)
						)}
					/>
				)}
			</Switch>
		</Fragment>
	);
};

export default InventoryFlo;
