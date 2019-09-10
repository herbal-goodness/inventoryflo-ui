import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Summary from './TransfersSummary';
import New from './NewTransfer';

function Transfers() {
	return (
		<>
			<nav>
				<NavLink className="nav-item btn orange-back" to="/transfers">
					Transfers Summary
				</NavLink>
				{'    '}
				<NavLink className="nav-item btn orange-back" to="/transfers/new">
					New Transfer
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/transfers" component={Summary} />
				<Route exact path="/transfers/new" component={New} />
			</Switch>
		</>
	);
}

export default Transfers;
