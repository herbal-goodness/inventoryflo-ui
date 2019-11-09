import PropTypes from 'prop-types';
import React from 'react';
import ReactDataGrid from 'react-data-grid';

const DataGrid = ({
	columns,
	enableCellSelect,
	rows,
	updateRows,
}) => {
	const handleUpdate = ({ fromRow, toRow, updated }) => {
		const updatedRows = rows.map((row, index) => {
			if (index < fromRow || index > toRow) {
				return row;
			}

			return { ...row, ...updated };
		});

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
	updateRows: PropTypes.func,
};

DataGrid.defaultProps = {
	enableCellSelect: false,
	updateRows: () => { /* no-op */ },
};

export default DataGrid;
