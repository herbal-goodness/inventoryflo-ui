import React from 'react';
import { Menu } from 'react-data-grid-addons';

const { ContextMenu, MenuItem } = Menu;

// TODO: figure out how to implement this functionality
const DataGridContextMenu = ({
	id,
	idx,
	rowIdx,
}) => {
	const editRow = () => {
		debugger;
	};

	return (
		<ContextMenu id={id}>
			<MenuItem data={{ rowIdx, idx }} onClick={editRow}>
				Edit Item
			</MenuItem>
			<MenuItem data={{ rowIdx, idx }} onClick={() => {}}>
				Delete Item
			</MenuItem>
		</ContextMenu>
	);
};

export default DataGridContextMenu;
