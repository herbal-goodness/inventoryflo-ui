import axios from 'axios';

const warehousesEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/warehouses/';

const getWarehouses = () => axios.get(warehousesEndpoint);

const updateWarehouses = (updatedWarehouses) => axios.put(
	warehousesEndpoint,
	updatedWarehouses,
);

const addWarehouse = (warehouse) => axios.post(
	warehousesEndpoint,
	warehouse,
);

export {
	addWarehouse,
	getWarehouses,
	updateWarehouses,
};
