import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Summary from './WarehousesSummary';
import New from './NewWarehouse';
import AdjustmentsSummary from './AdjustmentsSummary';
import NewAdjustment from './NewAdjustment';

function Warehouses() {
	return (
		<>
			<nav>
				<NavLink className="nav-item btn orange-back" to="/warehouses">
					Warehouses
				</NavLink>
				{'    '}
				<NavLink className="nav-item btn orange-back" to="/warehouses/new">
					New Warehouse
				</NavLink>
				<NavLink
					className="nav-item btn orange-back"
					to="/warehouses/new-adjustment"
				>
					Inventory Adjustment
				</NavLink>
				<NavLink
					className="nav-item btn orange-back"
					to="/warehouses/adjustments"
				>
					Adjustment Summary
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/warehouses" component={Summary} />
				<Route exact path="/warehouses/new" component={New} />
				<Route exact path="/warehouses" component={AdjustmentsSummary} />
				<Route exact path="/warehouses/new" component={NewAdjustment} />
			</Switch>
		</>
	);
}

export default Warehouses;
