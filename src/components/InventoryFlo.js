import React, { Fragment, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from './global/Login';
import Header from './global/Header';
import Items from './items/Items';
import Contacts from './contacts/Contacts';

const InventoryFlo = () => {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<Fragment>
			<Header loggedIn={loggedIn} logOut={() => setLoggedIn(false)} />
			<Switch>
				{ loggedIn && (
					<Fragment>
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
					render={(loggedIn) => (
						loggedIn === true
							? <Redirect to="/inventory-summary" />
							: <Login setLogin={setLoggedIn} />
					)}
				/>
				{/* <Route path="/">
					<Login setLogin={setLoggedIn} />
				</Route> */}
			</Switch>
		</Fragment>
	);
};

export default InventoryFlo;
