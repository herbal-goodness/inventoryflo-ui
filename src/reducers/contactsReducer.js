import {
	ADD_CONTACT,
	CALL_API,
	CALL_FAILURE,
	SET_CONTACTS,
	UPDATE_CONTACT,
	UPDATE_CONTACTS,
} from '../actions/contactsActions';

const initialState = {
	error: false,
	data: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {

	case ADD_CONTACT: {
		return { error: false, data: [...state.data, action.contact], loading: false };
	}

	case CALL_API: {
		return { ...state, error: false, loading: true };
	}

	case CALL_FAILURE: {
		return { ...state, error: action.error };
	}

	case SET_CONTACTS: {
		return { error: false, data: action.contacts, loading: false };
	}

	case UPDATE_CONTACT: {
		const updatedContacts = state.data.map(contact => contact.id === action.contact.id ? action.contact : contact);

		return { error: false, data: updatedContacts, loading: false };
	}

	case UPDATE_CONTACTS: {
		return { error: false, data: action.contacts, loading: false };
	}

	default:
		return state;
	}
};
