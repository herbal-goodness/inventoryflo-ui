import axios from 'axios';

const itemsEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/items';

const headers = {
	'Content-Type': 'application/json'
};

const addItem = (item) => axios.post(
	itemsEndpoint,
	item,
	{ headers }
);

const getItem = (sku) => axios.get(`${itemsEndpoint}/${sku}`);

const getItems = () => axios.get(itemsEndpoint);

const updateItem = (updatedItem) => axios.put(
	itemsEndpoint,
	updatedItem,
	{ headers }
);

const updateItems = (updatedItems) => axios.put(
	itemsEndpoint,
	updatedItems,
	{ headers }
);

export {
	addItem,
	getItem,
	getItems,
	updateItem,
	updateItems,
};
