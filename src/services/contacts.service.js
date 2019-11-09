import axios from 'axios';

const contactsEndpoint = 'https://7rjxorqyb0.execute-api.us-east-2.amazonaws.com/dev/contacts/';

const getContacts = () => axios.get(contactsEndpoint);

const updateContacts = (updatedContacts) => axios.put(
	contactsEndpoint,
	updatedContacts,
);

const addContact = (contact) => axios.post(
	contactsEndpoint,
	contact,
);

export {
	addContact,
	getContacts,
	updateContacts,
};
