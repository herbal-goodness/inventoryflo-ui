import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageWrapper } from '../shared/StyledComponents';
import PageTabs from '../shared/PageTabs';
import AdjustmentSummary from './AdjustmentsSummary';
import InventoryAdjustment from './InventoryAdjustment';
import WarehousesSummary from './WarehousesSummary';
import Warehouse from './Warehouse';

const Warehouses = ({ match }) => {
	const pageTabs = [
		{ name: 'Warehouses', path: `${match.url}` },
		{ name: 'New Warehouse', path: `${match.url}/new` },
		{ name: 'Adjustment Summary', path: `${match.url}/adjustment-summary` },
		{ name: 'Inventory Adjustment', path: `${match.url}/inventory-adjustment` },
	];

	return (
		<PageWrapper>
			<PageTabs tabs={pageTabs} />
			<Switch>
				<Route exact path={`${match.url}`} component={WarehousesSummary} />
				<Route exact path={`${match.url}/new`} component={Warehouse} />
				<Route exact path={`${match.url}/inventory-adjustment`} component={InventoryAdjustment} />
				<Route exact path={`${match.url}/adjustment-summary`} component={AdjustmentSummary} />
				<Route exact path={`${match.url}/:id`} component={Warehouse} />
			</Switch>
		</PageWrapper>
	);
};

Warehouses.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Warehouses;
