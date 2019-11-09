import axios from 'axios';

const itemsEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/items/'

const getItems = () => axios.get(itemsEndpoint);

const updateItems = (updatedItems) => axios.put(
	itemsEndpoint,
	updatedItems,
);

const addItem = (item) => axios.post(
	itemsEndpoint,
	item,
);

export {
	addItem,
	getItems,
	updateItems,
};
