import {
	addWarehouse,
	getWarehouses,
	updateWarehouse,
	updateWarehouses,
} from '../services/warehousesService';

export const ADD_WAREHOUSE = 'ADD_WAREHOUSE';
export const CALL_API = 'CALL_API';
export const CALL_FAILURE = 'CALL_FAILURE';
export const SET_WAREHOUSES = 'SET_WAREHOUSES';
export const UPDATE_WAREHOUSE = 'UPDATE_WAREHOUSE';
export const UPDATE_WAREHOUSES = 'UPDATE_WAREHOUSES';

export const addNewWarehouse = (warehouse) => (dispatch) => {
	dispatch({ type: CALL_API });

	addWarehouse(warehouse).then(
		({ data }) => dispatch({ type: ADD_WAREHOUSE, warehouse: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const getAllWarehouses = () => (dispatch) => {
	dispatch({ type: CALL_API });

	getWarehouses().then(
		({ data }) => dispatch({ type: SET_WAREHOUSES, warehouses: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const setWarehouse = (warehouse) => (dispatch) => {
	dispatch({ type: CALL_API });

	updateWarehouse(warehouse).then(
		({ data }) => dispatch({ type: UPDATE_WAREHOUSE, warehouse: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const setWarehouses = (warehouses) => (dispatch) => {
	dispatch({ type: CALL_API });

	updateWarehouses(warehouses).then(
		({ data }) => dispatch({ type: UPDATE_WAREHOUSES, warehouses: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};
