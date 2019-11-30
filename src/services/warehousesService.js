import axios from 'axios';

const warehousesEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/warehouses/';

const headers = {
	'Content-Type': 'application/json'
};

const addWarehouse = (warehouse) => axios.post(
	warehousesEndpoint,
	warehouse,
	{ headers },
);

const getInventoryAdjustments = () => axios.get(`${warehousesEndpoint}/inventory-adjustments`);

const getWarehouses = () => axios.get(warehousesEndpoint);

const updateWarehouse = (updatedWarehouse) => axios.put(
	warehousesEndpoint,
	updatedWarehouse,
	{ headers },
);

const updateWarehouses = (updatedWarehouses) => axios.put(
	warehousesEndpoint,
	updatedWarehouses,
	{ headers },
);

export {
	addWarehouse,
	getInventoryAdjustments,
	getWarehouses,
	updateWarehouse,
	updateWarehouses,
};
