import PropTypes from 'prop-types';
import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { Menu } from 'react-data-grid-addons';

const { ContextMenuTrigger } = Menu;

const DataGrid = ({
	columns,
	contextMenu,
	enableCellSelect,
	rows,
	trackedChanges,
	updateRows,
	updateTrackedChanges,
}) => {
	const handleUpdate = ({ fromRow, toRow, updated }) => {
		const updatedRows = rows.map((row, index) => {
			if (index < fromRow || index > toRow) {
				return row;
			}

			return { ...row, ...updated };
		});

		const updatedChanges = rows
			.filter((row, index) => index >= fromRow && index <= toRow)
			.map(row => ({ ...row, ...updated }));

		updateTrackedChanges([...trackedChanges, ...updatedChanges]);
		updateRows(updatedRows);
	};

	return (
		<ReactDataGrid
			columns={columns}
			contextMenu={contextMenu}
			enableCellSelect={enableCellSelect}
			onGridRowsUpdated={handleUpdate}
			rowGetter={i => rows[i]}
			rowsCount={rows.length}
			RowsContainer={ContextMenuTrigger}
		/>
	);
};

DataGrid.propTypes = {
	RowsContainer: PropTypes.node,
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
	contextMenu: PropTypes.node,
	enableCellSelect: PropTypes.bool,
	rows: PropTypes.arrayOf(PropTypes.object).isRequired,
	trackedChanges: PropTypes.arrayOf(PropTypes.object),
	updateRows: PropTypes.func,
	updateTrackedChanges: PropTypes.func,
};

DataGrid.defaultProps = {
	contextMenu: null,
	enableCellSelect: false,
	trackedChanges: [],
	updateRows: () => { /* no-op */ },
	updateTrackedChanges: () => { /* no-op */ },
};

export default DataGrid;
