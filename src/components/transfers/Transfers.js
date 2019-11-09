import React from 'react';
import PageNav from '../common/PageNav';
import Summary from './TransfersSummary';
import New from './NewTransfer';

function Transfers() {
	let links = [
		{ path: '/transfers', text: 'Transfers Summary', component: Summary },
		{ path: '/transfers/new', text: 'New Transfers', component: New },
	];
	return <PageNav links={links} />;
}

export default Transfers;
