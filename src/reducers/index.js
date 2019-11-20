import { combineReducers } from 'redux';

import contacts from './contactsReducer';
import items from './itemsReducer';

const rootReducer = combineReducers({ contacts, items });

export default rootReducer;
