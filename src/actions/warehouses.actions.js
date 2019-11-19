import {
	addWarehouse,
	getWarehouses,
	updateWarehouse,
	updateWarehouses,
} from '../services/warehouses.service';

export const ADD_WAREHOUSE = 'ADD_WAREHOUSE';
export const ADD_WAREHOUSE_FAILURE = 'ADD_WAREHOUSE_FAILURE';
export const ADD_WAREHOUSE_SUCCESS = 'ADD_WAREHOUSE_SUCCESS';
export const GET_WAREHOUSES = 'GET_WAREHOUSES';
export const GET_WAREHOUSES_FAILURE = 'GET_WAREHOUSES_FAILURE';
export const GET_WAREHOUSES_SUCCESS = 'GET_WAREHOUSES_SUCCESS';
export const UPDATE_WAREHOUSE = 'UPDATE_WAREHOUSE';
export const UPDATE_WAREHOUSE_FAILURE = 'UPDATE_WAREHOUSE_FAILURE';
export const UPDATE_WAREHOUSE_SUCCESS = 'UPDATE_WAREHOUSE_SUCCESS';
export const UPDATE_WAREHOUSES = 'UPDATE_WAREHOUSES';
export const UPDATE_WAREHOUSES_FAILURE = 'UPDATE_WAREHOUSES_FAILURE';
export const UPDATE_WAREHOUSES_SUCCESS = 'UPDATE_WAREHOUSES_SUCCESS';

export const addNewWarehouse = (Warehouse) => dispatch => addWarehouse(Warehouse).then(
	({ data }) => dispatch({ type: ADD_WAREHOUSE_SUCCESS, data }),
	(error) => dispatch({ type: ADD_WAREHOUSE_FAILURE, error }),
);

export const getAllWarehouses = () => dispatch => getWarehouses().then(
	({ data }) => dispatch({ type: GET_WAREHOUSES_SUCCESS, data }),
	(error) => dispatch({ type: GET_WAREHOUSES_FAILURE, error }),
);

export const setWarehouse = (Warehouse) => dispatch => updateWarehouse(Warehouse).then(
	({ data }) => dispatch({ type: UPDATE_WAREHOUSE_SUCCESS, data }),
	(error) => dispatch({ type: UPDATE_WAREHOUSE_FAILURE, error }),
);

export const setWarehouses = (Warehouses) => dispatch => updateWarehouses(Warehouses).then(
	({ data }) => dispatch({ type: UPDATE_WAREHOUSES_SUCCESS, data }),
	(error) => dispatch({ type: UPDATE_WAREHOUSES_FAILURE, error }),
);
