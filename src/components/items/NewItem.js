import React from 'react';
import {
	RadioGroup,
	FormInput,
	FormButtons,
	Select,
	CheckGroup,
} from '../common/FormCommons';

function NewItem() {
	let itemTypes = [
		{ value: 'inventory', label: 'Inventory' },
		{ value: 'sales', label: 'Sales and Purchases' },
	];

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
				<FormInput id='sku' label='SKU' style=' col-md-6' />
				<FormInput id='stockOnHand' label='Stock on hand' style=' col-md-6' />
			</div>
			<div className='form-row'>
				<FormInput id='sName' label='Item Short Name' style=' col-md-6' />
				<FormInput id='lName' label='Item Long Name' style=' col-md-6' />
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label for='desc'>Item Description</label>
					<textarea className='form-control' id='desc' />
				</div>
				<Select
					id='category'
					label='Category'
					style=' col-md-6'
					placeholder='Select'
					options={['Tea', 'Liquid', 'Capsule', 'Raw']}
				/>
			</div>
			<div className='form-row'>
				<Select
					id='warehouse'
					label='Warehouse'
					style=' col-md-6'
					placeholder='Select'
					options={['Davidsons', 'Amazon', 'Efulfillment']}
				/>
				<Select
					id='vendor'
					label='Vendor'
					style=' col-md-6'
					placeholder='Select'
					options={['Davidsons', 'Nutra Science', 'Liquid Nutra']}
				/>
			</div>
			<CheckGroup id='certifications' label='Certification' checks={certs} />
			<FormButtons parent='/items' />
		</form>
	);
}

export default NewItem;
