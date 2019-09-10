import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Summary from './OrdersSummary';
import New from './NewOrder';

function Orders() {
	return (
		<>
			<nav>
				<NavLink className="nav-item btn orange-back" to="/purchase-orders">
					PO Summary
				</NavLink>
				{'    '}
				<NavLink className="nav-item btn orange-back" to="/purchase-orders/new">
					New PO
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/purchase-orders" component={Summary} />
				<Route exact path="/purchase-orders/new" component={New} />
			</Switch>
		</>
	);
}

export default Orders;
