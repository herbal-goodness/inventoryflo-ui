import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Menu } from 'react-data-grid-addons';
import styled from 'styled-components';

import DataGrid from '../shared/DataGrid';
import DataGridContextMenu from '../shared/DataGridContextMenu';
import { PageHeader } from '../shared/StyledComponents';
import { columns } from './config';

const { ContextMenuTrigger } = Menu;

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
	const [currentItems, setCurrentItems] = useState(items);
	const [changedItems, setChangedItems] = useState([]);

	useEffect(() => { getItems(); }, [getItems]);

	useEffect(() => {
		setCurrentItems(items);
	}, [items]);

	const deleteRow = () => {
		console.log('deleteRow');
	};

	const editItem = () => {
		console.log('editItem');
	};

	const clearChanges = () => {
		setCurrentItems(items);
		setChangedItems([]);
	}

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
					// TODO: currently broken, need to figure out why
					<DataGridContextMenu
						onRowDelete={(e) => deleteRow(e)}
						onRowEdit={(e) => editItem(e)}
					/>
				}
				enableCellSelect
				rows={currentItems}
				trackedChanges={changedItems}
				updateRows={setCurrentItems}
				updateTrackedChanges={setChangedItems}
				RowsContainer={ContextMenuTrigger}
			/>
			<ButtonToolbar>
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
			</ButtonToolbar>
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
