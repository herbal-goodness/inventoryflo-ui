export default function itemsReducer(state = [], action) {
	switch (action.type) {
	case 'DELETE_ITEM':
		return state.filter(function(val) {
			return val.SKU !== action.item.SKU;
		});
	case 'ADD_ITEM':
		return [action.item, ...state];
	case 'EDIT_ITEM':
		let item = action.item;
		return [item, ...state.filter(val => val.SKU !== item.SKU)];
	default:
		return state;
	}
}
