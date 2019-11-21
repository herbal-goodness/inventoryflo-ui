import {
	ADD_WAREHOUSE,
	CALL_API,
	CALL_FAILURE,
	SET_WAREHOUSES,
	UPDATE_WAREHOUSE,
	UPDATE_WAREHOUSES,
} from '../actions/warehousesActions';

const initialState = {
	error: false,
	data: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {

	case ADD_WAREHOUSE: {
		return { error: false, data: [...state.data, action.warehouse], loading: false };
	}

	case CALL_API: {
		return { ...state, error: false, loading: true };
	}

	case CALL_FAILURE: {
		return { ...state, error: action.error };
	}

	case SET_WAREHOUSES: {
		return { error: false, data: action.warehouses, loading: false };
	}

	case UPDATE_WAREHOUSE: {
		const updatedContacts = state.data.map(warehouse => warehouse.id === action.warehouse.id ? action.warehouse : warehouse);

		return { error: false, data: updatedContacts, loading: false };
	}

	case UPDATE_WAREHOUSES: {
		return { error: false, data: action.warehouses, loading: false };
	}

	default:
		return state;
	}
};
