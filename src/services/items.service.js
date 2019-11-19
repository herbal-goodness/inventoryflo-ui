import axios from 'axios';

const itemsEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/items';

const addItem = (item) => axios.post(
	itemsEndpoint,
	item,
);

const getItems = () => axios.get(itemsEndpoint);

const updateItem = (updatedItem) => axios.put(
	itemsEndpoint,
	updatedItem,
);

const updateItems = (updatedItems) => axios.put(
	itemsEndpoint,
	updatedItems,
);

export {
	addItem,
	getItems,
	updateItem,
	updateItems,
};
