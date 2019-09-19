import React from 'react';
import {
	RadioGroup,
	FormInput,
	FormButtons,
	Select,
	CheckGroup,
} from '../common/FormCommons';
import getItems from '../../api/Items';
import { findInArray } from '../../utils';

function ItemDetails({ match }) {
	let item = findInArray(getItems(), 'SKU', match.params.sku);
	let itemTypes = [
		{ value: 'inventory', label: 'Inventory' },
		{ value: 'sales', label: 'Sales and Purchases' },
	];
	findInArray(itemTypes, 'label', item['Item Type']).checked = 'true';
	let certs = [
		{ value: 'organic', label: 'Organic' },
		{ value: 'kosher', label: 'Kosher' },
		{ value: 'glutenFree', label: 'Gluten Free' },
		{ value: 'other', label: 'Other' },
	];
	return (
		<form className='mx-2'>
			<div className='form-row'>
				<div className='form-group col-md-6' id='pdtType'>
					<label for='itmType'>Item Type</label>
					<RadioGroup id='itmType' radios={itemTypes} />
				</div>
			</div>
			<div className='form-row'>
				<FormInput id='sku' label='SKU' style=' col-md-6' value={item['SKU']} />
				<FormInput
					id='stockOnHand'
					label='Stock on hand'
					style=' col-md-6'
					value={item['Stock On Hand']}
				/>
			</div>
			<div className='form-row'>
				<FormInput
					id='sName'
					label='Item Short Name'
					style=' col-md-6'
					value={item['Short Name']}
				/>
				<FormInput
					id='lName'
					label='Item Long Name'
					style=' col-md-6'
					value={item['Item Name']}
				/>
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label for='desc'>Item Description</label>
					<textarea
						className='form-control'
						id='desc'
						value={item['Sales Description']}
					/>
				</div>
				<Select
					id='category'
					label='Category'
					style=' col-md-6'
					placeholder='Select'
					options={['Tea', 'Liquid', 'Capsule', 'Raw']}
					selected={item['Category']}
				/>
			</div>
			<div className='form-row'>
				<Select
					id='warehouse'
					label='Warehouse'
					style=' col-md-6'
					placeholder='Select'
					options={['Davidsons', 'Amazon', 'Efulfillment']}
					selected={item['Warehouse']}
				/>
				<Select
					id='vendor'
					label='Vendor'
					style=' col-md-6'
					placeholder='Select'
					options={['Davidsons', 'Nutra Science', 'Liquid Nutra']}
					selected={item['Vendor']}
				/>
			</div>
			<CheckGroup
				id='certifications'
				label='Certification'
				checks={certs}
				selected={item['Certifications']}
			/>
			<FormButtons parent='/items' />
		</form>
	);
}

export default ItemDetails;
