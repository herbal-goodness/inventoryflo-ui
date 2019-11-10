import PropTypes from 'prop-types';
import React from 'react';
import ReactDataGrid from 'react-data-grid';

const DataGrid = ({
	columns,
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
			enableCellSelect={enableCellSelect}
			onGridRowsUpdated={handleUpdate}
			rowGetter={i => rows[i]}
			rowsCount={rows.length}
		/>
	);
};

DataGrid.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
	enableCellSelect: PropTypes.bool,
	rows: PropTypes.arrayOf(PropTypes.object).isRequired,
	trackedChanges: PropTypes.arrayOf(PropTypes.object),
	updateRows: PropTypes.func,
	updateTrackedChanges: PropTypes.func,
};

DataGrid.defaultProps = {
	enableCellSelect: false,
	trackedChanges: [],
	updateRows: () => { /* no-op */ },
	updateTrackedChanges: () => { /* no-op */ },
};

export default DataGrid;
