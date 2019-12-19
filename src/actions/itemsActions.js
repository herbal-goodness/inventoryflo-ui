import { addItem, getItems, updateItem, updateItems } from '../services/itemsService';

export const ADD_ITEM = 'ADD_ITEM';
export const CALL_API = 'CALL_API';
export const CALL_FAILURE = 'CALL_FAILURE';
export const SET_ITEMS = 'SET_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const addNewItem = (item) => (dispatch) => {
	dispatch({ type: CALL_API });

	addItem(item).then(
		({ data }) => dispatch({ type: ADD_ITEM, item: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const getAllItems = () => (dispatch) => {
	dispatch({ type: CALL_API });

	getItems().then(
		({ data }) => dispatch({ type: SET_ITEMS, items: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const setItem = (item) => (dispatch) => {
	dispatch({ type: CALL_API });
	
	updateItem(item).then(
		({ data }) => dispatch({ type: UPDATE_ITEM, item: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const setItems = (items) => (dispatch) => {
	dispatch({ type: CALL_API });
	
	updateItems(items).then(
		({ data }) => dispatch({ type: UPDATE_ITEMS, items: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};
