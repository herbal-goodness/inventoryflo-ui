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

	useEffect(() => {
		getItems().then(
			({ data }) => {
				setItems(data);
			},
			(error) => {
				console.error(error);

				setItems(mockRows);
			}
		);
	}, []);

	const mockRows = [
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' },
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' },
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' },
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' }
	];

	return (
		<Wrapper>
			<PageHeader>Item Summary</PageHeader>
			<DataGrid
				columns={columns}
				enableCellSelect
				rows={items}
				updateRows={setItems}
			/>
		</Wrapper>
	);
};

export default ItemSummary;
