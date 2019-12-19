import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import DataGrid from '../shared/DataGrid';
import DataGridContextMenu from '../shared/DataGridContextMenu';
import { PageHeader, StyledButtonToolbar } from '../shared/StyledComponents';
import { columns } from './config';

const Wrapper = styled.section`
	width: 100%;
`;

const ItemsSummary = ({
	error,
	getItems,
	items,
	loading,
	updateItems,
}) => {
	const history = useHistory();
	const location = useLocation();

	const [currentItems, setCurrentItems] = useState(items);
	const [changedItems, setChangedItems] = useState([]);

	useEffect(() => { getItems(); }, [getItems]);

	useEffect(() => {
		setCurrentItems(items);
	}, [items]);

	const deleteRow = (event, rowIndex) => {
		console.log('deleteRow');
		console.log('rowIndex:', rowIndex);
	};

	const editItem = (event, rowIndex) => {
		const item = currentItems[rowIndex];

		const newPath = `${location.pathname}/${item.sku}`;
		history.push(newPath, item);
	};

	const clearChanges = () => {
		setCurrentItems(items);
		setChangedItems([]);
	};

	const saveChanges = () => {
		updateItems(changedItems);
	};

	return (
		<Wrapper>
			<PageHeader>Item Summary</PageHeader>
			{ error && (
				<Alert variant="danger">{error.message}</Alert>
			)}
			<DataGrid
				columns={columns}
				contextMenu={
					<DataGridContextMenu
						id="items-summary-context-menu"
						onRowDelete={(e, { rowIdx }) => deleteRow(e, rowIdx)}
						onRowEdit={(e, { rowIdx }) => editItem(e, rowIdx)}
					/>
				}
				enableCellSelect
				rows={currentItems}
				trackedChanges={changedItems}
				updateRows={setCurrentItems}
				updateTrackedChanges={setChangedItems}
			/>
			<StyledButtonToolbar>
				<Button
					disabled={changedItems.length < 1}
					id="clear-changes-button"
					onClick={clearChanges}
					variant="light"
				>
					Clear Changes
				</Button>
				<Button
					disabled={changedItems.length < 1}
					id="save-changes-button"
					onClick={saveChanges}
					variant="primary"
				>
					Save Changes
				</Button>
			</StyledButtonToolbar>
		</Wrapper>
	);
};

ItemsSummary.propTypes = {
	error: PropTypes.bool.isRequired,
	getItems: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
	updateItems: PropTypes.func.isRequired,
};

export default ItemsSummary;
