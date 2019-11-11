import axios from 'axios';

const warehousesEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/warehouses/';

const addWarehouse = (warehouse) => axios.post(
	warehousesEndpoint,
	warehouse,
);

const getInventoryAdjustments = () => axios.get(`${warehousesEndpoint}/inventory-adjustments`);

const getWarehouses = () => axios.get(warehousesEndpoint);

const updateWarehouses = (updatedWarehouses) => axios.put(
	warehousesEndpoint,
	updatedWarehouses,
);

export {
	addWarehouse,
	getInventoryAdjustments,
	getWarehouses,
	updateWarehouses,
};
