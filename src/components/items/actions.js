function deleteItem(item) {
	return { type: 'DELETE_ITEM', item };
}

function addItem(item) {
	return { type: 'ADD_ITEM', item };
}

function editItem(item) {
	return { type: 'EDIT_ITEM', item };
}

export { deleteItem, addItem, editItem };
