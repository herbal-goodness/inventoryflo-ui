import { addContact, getContacts, updateContact, updateContacts } from '../services/contactsService';

export const ADD_CONTACT = 'ADD_CONTACT';
export const CALL_API = 'CALL_API';
export const CALL_FAILURE = 'CALL_FAILURE';
export const SET_CONTACTS = 'SET_CONTACTS';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';

export const addNewContact = (item) => (dispatch) => {
	dispatch({ type: CALL_API });

	addContact(item).then(
		({ data }) => dispatch({ type: ADD_CONTACT, contact: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const getAllContacts = () => (dispatch) => {
	dispatch({ type: CALL_API });

	getContacts().then(
		({ data }) => dispatch({ type: SET_CONTACTS, contacts: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const setContact = (item) => (dispatch) => {
	dispatch({ type: CALL_API });
	
	updateContact(item).then(
		({ data }) => dispatch({ type: UPDATE_CONTACT, contact: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};

export const setContacts = (items) => (dispatch) => {
	dispatch({ type: CALL_API });
	
	updateContacts(items).then(
		({ data }) => dispatch({ type: UPDATE_CONTACTS, contacts: data }),
		(error) => dispatch({ type: CALL_FAILURE, error }),
	);
};
