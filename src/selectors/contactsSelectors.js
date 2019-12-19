import { createSelector } from 'reselect';

export const contactsSelector = state => state.contacts;

export const getContacts = createSelector(
	contactsSelector,
	contacts => contacts.data
);

export const getError = createSelector(
	contactsSelector,
	contacts => contacts.error,
);

export const getLoading = createSelector(
	contactsSelector,
	contacts => contacts.loading,
);
