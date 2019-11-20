import {
	ADD_ITEM_SUCCESS,
	GET_ITEMS_SUCCESS,
	UPDATE_ITEM_SUCCESS,
	UPDATE_ITEMS_SUCCESS,
} from '../actions/itemsActions';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {

	case ADD_ITEM_SUCCESS: {
		return [...state, action.item];
	}
	case GET_ITEMS_SUCCESS: {
		return action.items;
	}
	case UPDATE_ITEM_SUCCESS: {
		return state;
	}
	case UPDATE_ITEMS_SUCCESS: {
		return state;
	}

	default:
		return state;
	}
};
