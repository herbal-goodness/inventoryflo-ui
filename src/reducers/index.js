import { combineReducers } from 'redux';

import contacts from './contactsReducer';
import items from './itemsReducer';
import warehouses from './warehousesReducer';

const rootReducer = combineReducers({
	contacts,
	items,
	warehouses,
});

export default rootReducer;
