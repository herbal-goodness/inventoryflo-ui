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
	},
	{
		key: 'sku',
		name: 'SKU',
		editable: false,
	},
	{
		key: 'type',
		name: 'Type',
		editable: true,
		filterable: true,
	},
	{
		key: 'short_name',
		name: 'Short Product Name',
		editable: true,
	},
	{
		key: 'long_name',
		name: 'Long Product Name',
		editable: true,
	},
	{
		key: 'category',
		name: 'Category',
		editable: true,
	},
	{
		key: 'isbn',
		name: 'isbn',
		editable: true,
	},
	{
		key: 'sales_desc',
		name: 'Sales Description',
		editable: true,
	},
	{
		key: 'upc',
		name: 'UPC',
		editable: true,
	},
	{
		key: 'weight',
		name: 'weight',
		editable: true,
	},
	{
		key: 'warehouse',
		name: 'Warehouse',
		editable: true,
	},
	{
		key: 'on_hand',
		name: 'Stock On Hand',
		editable: true,
	},
	{
		key: 'inventory_acct',
		name: 'Inventory Account',
		editable: true,
	},
	{
		key: 'purchase_acct',
		name: 'Purchase Account',
		editable: true,
	},
	{
		key: 'source',
		name: 'source',
		editable: true,
	},
	{
		key: 'combo',
		name: 'combo',
		editable: true,
	},
	{
		key: 'certifications',
		name: 'Certifications',
		editable: true,
		editor: CertificationsEditor,
	},
	{
		key: 'purchase_desc',
		name: 'Purchase Description',
		editable: true,
	},
	{
		key: 'purchase_price',
		name: 'Purchase Price',
		editable: true,
	},
	{
		key: 'selling_price',
		name: 'Selling Price',
		editable: true,
	},
	{
		key: 'vendor',
		name: 'Vendor',
		editable: true,
	},
	{
		key: 'price_currency',
		name: 'Price Currency',
		editable: true,
	},
];
