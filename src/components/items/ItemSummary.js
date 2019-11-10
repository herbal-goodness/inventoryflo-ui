import React, { useEffect, useState } from 'react';
import { Menu } from 'react-data-grid-addons';
import styled from 'styled-components';

import { getItems } from '../../services/items.service';
import DataGrid from '../shared/DataGrid';
import DataGridContextMenu from '../shared/DataGridContextMenu';
import { PageHeader } from '../shared/StyledComponents';
import { columns } from './config';

const { ContextMenuTrigger } = Menu;

const Wrapper = styled.section`
	width: 100%;
`;

const ItemSummary = () => {
	const [items, setItems] = useState([]);
	const [changedItems, setChangedItems] = useState([]);

	useEffect(() => {
		getItems().then(
			({ data }) => {
				setItems(data);
			},
			(error) => {
				console.error(error);
			}
		);
	}, []);

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
				rows={items}
				trackedChanges={changedItems}
				updateRows={setItems}
				updateTrackedChanges={setChangedItems}
				RowsContainer={ContextMenuTrigger}
			/>
		</Wrapper>
	);
};

export default ItemSummary;
