import { addContact, getContacts, updateContact, updateContacts } from '../services/items.service';

export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_CONTACT_FAILURE = 'UPDATE_CONTACT_FAILURE';
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
export const UPDATE_CONTACTS_FAILURE = 'UPDATE_CONTACTS_FAILURE';
export const UPDATE_CONTACTS_SUCCESS = 'UPDATE_CONTACTS_SUCCESS';

export const addNewContact = (item) => dispatch => addContact(item).then(
	({ data }) => dispatch({ type: ADD_CONTACT_SUCCESS, data }),
	(error) => dispatch({ type: ADD_CONTACT_FAILURE, error }),
);

export const getAllContacts = () => dispatch => getContacts().then(
	({ data }) => dispatch({ type: GET_CONTACTS_SUCCESS, data }),
	(error) => dispatch({ type: GET_CONTACTS_FAILURE, error }),
);

export const setContact = (item) => dispatch => updateContact(item).then(
	({ data }) => dispatch({ type: UPDATE_CONTACT_SUCCESS, data }),
	(error) => dispatch({ type: UPDATE_CONTACT_FAILURE, error }),
);

export const setContacts = (items) => dispatch => updateContacts(items).then(
	({ data }) => dispatch({ type: UPDATE_CONTACTS_SUCCESS, data }),
	(error) => dispatch({ type: UPDATE_CONTACTS_FAILURE, error }),
);
