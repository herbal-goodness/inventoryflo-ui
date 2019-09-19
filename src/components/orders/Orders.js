import React from 'react';
import Summary from './OrdersSummary';
import New from './NewOrder';
import PageNav from '../common/PageNav';

function Orders() {
	let links = [
		{ path: '/purchase-orders', text: 'PO Summary', component: Summary },
		{ path: '/purchase-orders/new', text: 'New PO', component: New },
	];
	return <PageNav links={links} />;
}

export default Orders;
