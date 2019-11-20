import { createSelector } from 'reselect';

export const itemsSelector = state => state.items;

export const getError = createSelector(
	itemsSelector,
	items => items.error,
);


export const getItems = createSelector(
	itemsSelector,
	items => items.data
);

export const getLoading = createSelector(
	itemsSelector,
	items => items.loading,
);
