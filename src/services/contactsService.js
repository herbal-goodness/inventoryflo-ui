import axios from 'axios';

const contactsEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/contacts/';

const headers = {
	'Content-Type': 'application/json'
};

const addContact = (contact) => axios.post(
	contactsEndpoint,
	contact,
	{ headers }
);

const getContacts = () => axios.get(contactsEndpoint);

const updateContact = (updatedContact) => axios.put(
	contactsEndpoint,
	updatedContact,
	{ headers }
);

const updateContacts = (updatedContacts) => axios.put(
	contactsEndpoint,
	updatedContacts,
	{ headers }
);

export {
	addContact,
	getContacts,
	updateContact,
	updateContacts,
};
