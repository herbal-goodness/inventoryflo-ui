import axios from 'axios';

const contactsEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/contacts/';

const addContact = (contact) => axios.post(
	contactsEndpoint,
	contact,
);

const getContacts = () => axios.get(contactsEndpoint);

const updateContact = (updatedContact) => axios.put(
	contactsEndpoint,
	updatedContact,
);

const updateContacts = (updatedContacts) => axios.put(
	contactsEndpoint,
	updatedContacts,
);

export {
	addContact,
	getContacts,
	updateContact,
	updateContacts,
};
