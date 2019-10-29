import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
	RadioGroup,
	FormInput,
	FormButtons,
	Select,
	CheckGroup,
} from '../common/FormCommons';
import { findInArray } from '../../utils';
import { editItem } from './actions';

function ItemDetails({ item, handleSubmit }) {
	console.log(item);
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
		<form className="mx-2" onSubmit={handleSubmit}>
			<div className="form-row">
				<div className="form-group col-md-6" id="pdtType">
					<label htmlFor="Item Type">Item Type</label>
					<RadioGroup id="Item Type" radios={itemTypes} />
				</div>
			</div>
			<div className="form-row">
				<FormInput
					id="SKU"
					label="SKU"
					col=" col-md-6"
					value={item['SKU']}
					disabled
				/>
				<FormInput
					id="Stock On Hand"
					label="Stock On Hand"
					col=" col-md-6"
					value={item['Stock On Hand']}
				/>
			</div>
			<div className="form-row">
				<FormInput
					id="Short Name"
					label="Item Short Name"
					col=" col-md-6"
					value={item['Short Name']}
				/>
				<FormInput
					id="Item Name"
					label="Item Long Name"
					col=" col-md-6"
					value={item['Item Name']}
				/>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="Sales Description'">Item Description</label>
					<Field
						component="textarea"
						className="form-control"
						name="Sales Description'"
						value={item['Sales Description']}
					/>
				</div>
				<Select
					id="Category"
					label="Category"
					col=" col-md-6"
					placeholder="Select"
					options={['Tea', 'Liquid', 'Capsule', 'Raw']}
					selected={item['Category']}
				/>
			</div>
			<div className="form-row">
				<Select
					id="Warehouse"
					label="Warehouse"
					col=" col-md-6"
					placeholder="Select"
					options={['Davidsons', 'Amazon', 'Efulfillment']}
					selected={item['Warehouse']}
				/>
				<Select
					id="Vendor"
					label="Vendor"
					col=" col-md-6"
					placeholder="Select"
					options={['Davidsons', 'Nutra Science', 'Liquid Nutra']}
					selected={item['Vendor']}
				/>
			</div>
			<CheckGroup
				id="Certifications"
				label="Certification"
				checks={certs}
				selected={item['Certifications']}
			/>
			<FormButtons parent="/items" />
		</form>
	);
}

const ItemDetailsDisplay = reduxForm({ form: 'itemDetails' })(ItemDetails);

function ItemDetailsContainer({ item, dispatch }) {
	let submit = values => {
		dispatch(editItem(values));
	};
	return (
		<ItemDetailsDisplay item={item} initialValues={item} onSubmit={submit} />
	);
}

function s2p(s, p) {
	return {
		item: findInArray(s.items, 'SKU', p.match.params.sku),
	};
}

export default connect(s2p)(ItemDetailsContainer);
