import {
	ADD_ITEM,
	CALL_API,
	CALL_FAILURE,
	SET_ITEMS,
	UPDATE_ITEM,
	UPDATE_ITEMS,
} from '../actions/itemsActions';

const initialState = {
	error: false,
	data: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {

	case ADD_ITEM: {
		return { error: false, data: [...state.data, action.item], loading: false };
	}

	case CALL_API: {
		return { ...state, error: false, loading: true };
	}

	case CALL_FAILURE: {
		return { ...state, error: action.error}
	}

	case SET_ITEMS: {
		return { error: false, data: action.items, loading: false };
	}

	case UPDATE_ITEM: {
		const updatedItems = state.data.map(item => item.sku === action.item.sku ? action.item : item);

		return { error: false, data: updatedItems, loading: false };
	}

	case UPDATE_ITEMS: {
		return { error: false, data: action.items, loading: false };
	}

	default:
		return state;
	}
};
