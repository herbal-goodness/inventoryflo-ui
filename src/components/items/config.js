import React from 'react';
import { Editors } from 'react-data-grid-addons';
const { DropDownEditor } = Editors;

const certifications = [
	{ id: 'organic', value: 'organic' },
	{ id: 'epic', value: 'kosher' },
	{ id: 'story', value: 'other' }
];

const CertificationsEditor = <DropDownEditor options={certifications} multiple />;

export const columns = [
	{
		key: 'image',
		name: 'Image',
		editable: false,
		resizable: true,
	},
	{
		key: 'sku',
		name: 'SKU',
		editable: false,
		resizable: true,
		width: '100px',
	},
	{
		key: 'type',
		name: 'Type',
		editable: true,
		resizable: true,
		filterable: true,
	},
	{
		key: 'short_name',
		name: 'Short Product Name',
		editable: true,
		resizable: true,
	},
	{
		key: 'long_name',
		name: 'Long Product Name',
		editable: true,
		resizable: true,
	},
	{
		key: 'category',
		name: 'Category',
		editable: true,
		resizable: true,
	},
	{
		key: 'isbn',
		name: 'isbn',
		editable: true,
		resizable: true,
	},
	{
		key: 'sales_desc',
		name: 'Sales Description',
		editable: true,
		resizable: true,
	},
	{
		key: 'upc',
		name: 'UPC',
		editable: true,
		resizable: true,
	},
	{
		key: 'weight',
		name: 'Weight',
		editable: true,
		resizable: true,
	},
	{
		key: 'warehouse',
		name: 'Warehouse',
		editable: true,
		resizable: true,
	},
	{
		key: 'on_hand',
		name: 'Stock On Hand',
		editable: true,
		resizable: true,
	},
	{
		key: 'inventory_acct',
		name: 'Inventory Account',
		editable: true,
		resizable: true,
	},
	{
		key: 'purchase_acct',
		name: 'Purchase Account',
		editable: true,
		resizable: true,
	},
	{
		key: 'source',
		name: 'source',
		editable: true,
		resizable: true,
	},
	{
		key: 'combo',
		name: 'combo',
		editable: true,
		resizable: true,
	},
	{
		key: 'certifications',
		name: 'Certifications',
		editable: true,
		editor: CertificationsEditor,
		resizable: true,
	},
	{
		key: 'purchase_desc',
		name: 'Purchase Description',
		editable: true,
		resizable: true,
	},
	{
		key: 'purchase_price',
		name: 'Purchase Price',
		editable: true,
		resizable: true,
	},
	{
		key: 'selling_price',
		name: 'Selling Price',
		editable: true,
		resizable: true,
	},
	{
		key: 'vendor',
		name: 'Vendor',
		editable: true,
		resizable: true,
	},
	{
		key: 'price_currency',
		name: 'Price Currency',
		editable: true,
		resizable: true,
	},
];
