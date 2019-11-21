import { createSelector } from 'reselect';

export const warehousesSelector = state => state.warehouses;

export const getWarehouses = createSelector(
	warehousesSelector,
	warehouses => warehouses.data
);

export const getError = createSelector(
	warehousesSelector,
	warehouses => warehouses.error,
);

export const getLoading = createSelector(
	warehousesSelector,
	warehouses => warehouses.loading,
);