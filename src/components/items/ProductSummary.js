import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getItems } from '../../services/items.service';
import DataGrid from '../shared/DataGrid';

const Wrapper = styled.section`
	width: 100%;
`;

const ProductSummary = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItems().then(
			(items) => {
				setItems(items);
			},
			(error) => {
				console.error(error);

				setItems(mockRows);
			}
		);
	}, []);

	const columns = [
		{ key: 'image', name: 'Image', editable: false },
		{ key: 'sku', name: 'SKU', editable: true },
		{ key: 'productName', name: 'Product Name', editable: true },
		{ key: 'vendor', name: 'Vendor', editable: true },
		{ key: 'stockOnHand', name: 'Stock On Hand', editable: true },
		{ key: 'warehouse', name: 'Warehouse', editable: true }
	];

	const mockRows = [
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' },
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' },
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' },
		{ image: '123', sku: 'sku', productName: 'Test Product', vendor: 'Vendor', stockOnHand: 1, warehouse: 'Number 1' }
	];

	return (
		<Wrapper>
			<h1>Product Summary</h1>
			<DataGrid
				columns={columns}
				enableCellSelect
				rows={items}
				updateRows={setItems}
			/>
		</Wrapper>
	);
};

export default ProductSummary;
