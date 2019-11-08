import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import ReactDataGrid from 'react-data-grid';

import { getItems } from '../../services/items.service';

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

	const handleUpdate = ({ fromRow, toRow, updated }) => {
		const updatedRows = items.map((row, index) => {
			if (index < fromRow || index > toRow) {
				return row;
			}

			return { ...row, ...updated };
		});

		setItems(updatedRows);
	};

	return (
		<Fragment>
			<h1>Product Summary</h1>
			<ReactDataGrid
				columns={columns}
				enableCellSelect={true}
				onGridRowsUpdated={handleUpdate}
				rowGetter={i => items[i]}
				rowsCount={items.length}
			/>
		</Fragment>
	);
};

export default ProductSummary;
