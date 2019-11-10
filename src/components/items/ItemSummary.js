import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getItems } from '../../services/items.service';
import DataGrid from '../shared/DataGrid';
import { PageHeader } from '../shared/StyledComponents';
import { columns } from './config';

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

	return (
		<Wrapper>
			<PageHeader>Item Summary</PageHeader>
			<DataGrid
				columns={columns}
				enableCellSelect
				rows={items}
				trackedChanges={changedItems}
				updateRows={setItems}
				updateTrackedChanges={setChangedItems}
			/>
		</Wrapper>
	);
};

export default ItemSummary;
