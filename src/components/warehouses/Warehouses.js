import React from 'react';
import PageNav from '../common/PageNav';
import Summary from './WarehousesSummary';
import New from './NewWarehouse';
import AdjustmentsSummary from './AdjustmentsSummary';
import NewAdjustment from './NewAdjustment';

function Warehouses() {
	let links = [
		{ path: '/warehouses', text: 'Warehouses', component: Summary },
		{ path: '/warehouses/new', text: 'New Warehouse', component: New },
		{
			path: '/warehouses/adjustments',
			text: 'Inventory Adjustments',
			component: AdjustmentsSummary,
		},
		{
			path: '/warehouses/adjustments/new',
			text: 'New Adjustment',
			component: NewAdjustment,
		},
	];
	return <PageNav links={links} />;
}

export default Warehouses;
