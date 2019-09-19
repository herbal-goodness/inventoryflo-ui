import React from 'react';
import Summary from './ContactsSummary';
import New from './NewContact';
import PageNav from '../common/PageNav';

function Contacts() {
	let links = [
		{ path: '/contacts', text: 'Contacts Summary', component: Summary },
		{ path: '/contacts/new', text: 'New Contact', component: New },
	];
	return <PageNav links={links} />;
}

export default Contacts;
