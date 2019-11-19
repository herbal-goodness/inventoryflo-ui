import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Menu } from 'react-data-grid-addons';
import styled from 'styled-components';

// import { getItems } from '../../services/items.service';
import DataGrid from '../shared/DataGrid';
import DataGridContextMenu from '../shared/DataGridContextMenu';
import { PageHeader } from '../shared/StyledComponents';
import { columns } from './config';

const { ContextMenuTrigger } = Menu;

const Wrapper = styled.section`
	width: 100%;
`;

const ItemsSummary = ({
	getItems,
	items,
}) => {
	const [currentItems, setCurrentItems] = useState(items);
	const [changedItems, setChangedItems] = useState([]);

	useEffect(() => { getItems();}, []);

	useEffect(() => {
		setCurrentItems(items);
	}, [items]);

	const deleteRow = () => {
		console.log('deleteRow');
	};

	const editItem = () => {
		console.log('editItem');
	};

	const saveChanges = () => {
		console.log('saveChanges');
	};

	return (
		<Wrapper>
			<PageHeader>Item Summary</PageHeader>
			{/* TODO: implement bulk save button and functionality */}
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
		</Wrapper>
	);
};

ItemsSummary.propTypes = {
	getItems: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemsSummary;
