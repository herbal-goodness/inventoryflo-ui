import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
	RadioGroup,
	FormInput,
	FormButtons,
	Select,
	CheckGroup,
} from '../common/FormCommons';
import { addItem } from './actions';
import { connect } from 'react-redux';

function NewItem({ handleSubmit }) {
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
		<form className="mx-2" id="newItemForm" onSubmit={handleSubmit}>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="Item Type">Item Type</label>
					<RadioGroup id="Item Type" radios={itemTypes} />
				</div>
			</div>
			<div className="form-row">
				<FormInput id="SKU" label="SKU" col="col-md-6" />
				<FormInput id="Stock On Hand" label="Stock on hand" col="col-md-6" />
			</div>
			<div className="form-row">
				<FormInput id="Short Name" label="Item Short Name" col="col-md-6" />
				<FormInput id="Item Name" label="Item Long Name" col="col-md-6" />
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="description">Item Description</label>
					<Field
						component="textarea"
						className="form-control"
						name="description"
					/>
				</div>
				<Select
					id="category"
					label="Category"
					col="col-md-6"
					placeholder="Select"
					options={['Tea', 'Liquid', 'Capsule', 'Raw']}
				/>
			</div>
			<div className="form-row">
				<Select
					id="Warehouse"
					label="Warehouse"
					col="col-md-6"
					placeholder="Select"
					options={['Davidsons', 'Amazon', 'Efulfillment']}
				/>
				<Select
					id="Vendor"
					label="Vendor"
					col="col-md-6"
					placeholder="Select"
					options={['Davidsons', 'Nutra Science', 'Liquid Nutra']}
				/>
			</div>
			<CheckGroup id="certifications" label="Certification" checks={certs} />
			<FormButtons parent="/items" />
		</form>
	);
}

const NewItemDisplay = reduxForm({ form: 'newItem' })(NewItem);

function NewItemContainer({ dispatch }) {
	let submit = values => {
		dispatch(addItem(values));
	};
	return <NewItemDisplay onSubmit={submit} />;
}

export default connect()(NewItemContainer);
