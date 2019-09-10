import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Summary from './ContactsSummary';
import New from './NewContact';

function Contacts() {
	return (
		<>
			<nav>
				<NavLink className="nav-item btn orange-back" to="/contacts">
					Contacts Summary
				</NavLink>
				{'    '}
				<NavLink className="nav-item btn orange-back" to="/contacts/new">
					New Contact
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/contacts" component={Summary} />
				<Route exact path="/contacts/new" component={New} />
			</Switch>
		</>
	);
}

export default Contacts;
