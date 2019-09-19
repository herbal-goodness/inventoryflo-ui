import React from 'react';
import PageNav from '../common/PageNav';
import List from './ItemsList';
import New from './NewItem';

function Items() {
	let links = [
		{ path: '/items', text: 'Items List', component: List },
		{ path: '/items/new', text: 'New Item', component: New },
	];
	return <PageNav links={links} />;
}

export default Items;
