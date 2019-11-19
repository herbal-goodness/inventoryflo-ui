import { addItem, getItems, updateItem, updateItems } from '../services/items.service';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export const UPDATE_ITEMS_FAILURE = 'UPDATE_ITEMS_FAILURE';
export const UPDATE_ITEMS_SUCCESS = 'UPDATE_ITEMS_SUCCESS';

export const addNewItem = (item) => dispatch => addItem(item).then(
	({ data }) => dispatch({ type: ADD_ITEM_SUCCESS, item: data }),
	(error) => dispatch({ type: ADD_ITEM_FAILURE, error }),
);

export const getAllItems = () => dispatch => getItems().then(
	({ data }) => dispatch({ type: GET_ITEMS_SUCCESS, items: data }),
	(error) => dispatch({ type: GET_ITEMS_FAILURE, error }),
);

export const setItem = (item) => dispatch => updateItem(item).then(
	({ data }) => dispatch({ type: UPDATE_ITEM_SUCCESS, item: data }),
	(error) => dispatch({ type: UPDATE_ITEM_FAILURE, error }),
);

export const setItems = (items) => dispatch => updateItems(items).then(
	({ data }) => dispatch({ type: UPDATE_ITEMS_SUCCESS, items: data }),
	(error) => dispatch({ type: UPDATE_ITEMS_FAILURE, error }),
);
