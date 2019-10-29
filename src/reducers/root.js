import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import items from './itemsReducer';

const rootReducer = combineReducers({ items, form: formReducer });

export default rootReducer;
