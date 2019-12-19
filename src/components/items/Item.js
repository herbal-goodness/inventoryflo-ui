import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
	FormRow,
	Label,
	PageHeader,
	StyledButtonToolbar,
	StyledForm,
} from '../shared/StyledComponents';
import { getItem } from '../../services/itemsService';

const ActionButtons = styled.div`
	flex-grow: 1;
	text-align: right;
`;

const Item = ({
	addItem,
	error,
	loading,
	updateItem,
}) => {
	const { sku } = useParams();

	const [category, setCategory] = useState();
	const [caseSKU, setCaseSKU] = useState();
	const [certifications, setCertifications] = useState([]);
	const [copacker, setCopacker] = useState();
	const [productDescription, setProductDescription] = useState();
	const [productLongName, setProductLongName] = useState();
	const [productShortName, setProductShortName] = useState();
	const [type, setType] = useState();
	const [unitSKU, setUnitSKU] = useState();
	const [uploadImage, setUploadImage] = useState();
	// const [seoInfo, setSEOInfo] = useState();
	// const [shopifyInfo, setShopifyInfo] = useState();
	// const [amazonInfo, setAmazonInfo] = useState();

	useEffect(() => {
		if (sku) {
			getItem(sku).then(({ data }) => {
				setCategory(data.category);
				setCaseSKU(data.case_sku);
				setCertifications(data.certifications);
				setCopacker(data.warehouse);
				setProductDescription(data.sales_desc);
				setProductLongName(data.long_name);
				setProductShortName(data.short_name);
				setType(data.type);
				setUnitSKU(data.sku);
				setUploadImage(data.image);
			});
		}
	}, [sku]);

	const updateCertifications = (e) => {
		const { selectedOptions } = e.target;

		const updatedCertifications = Array.from(selectedOptions).map(option => option.value);

		setCertifications(updatedCertifications);
	};

	const formRequestBody = () => {
		return {
			category,
			caseSKU,
			certifications,
			copacker,
			productDescription,
			productLongName,
			productShortName,
			type,
			unitSKU,
			uploadImage,
		};
	};

	const addNewItem = (e) => {
		e.preventDefault();

		const item = formRequestBody();

		addItem(item);
	};

	const updateCurrentItem = (e) => {
		e.preventDefault();

		const item = formRequestBody();
		updateItem(item);
	};

	const clearInputs = () => {
		setCaseSKU();
		setCategory();
		setCertifications([]);
		setCopacker();
		setProductDescription();
		setProductLongName();
		setProductShortName();
		setType();
		setUnitSKU();
		setUploadImage();
	};

	return (
		<StyledForm onSubmit={addItem}>
			<PageHeader>{ sku ? `Update ${sku}` : 'New Item'}</PageHeader>
			{ error && (
				<Alert variant="danger">{error.message}</Alert>
			)}
			<FormRow>
				<Form.Group controlId="type-select">
					<Label>Type</Label>
					<Form.Control
						as="select"
						onChange={e => setType(e.target.value)}
						value={type}
					>
						<option>Turnkey</option>
						<option>Composite Unit</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="upload-image-input">
					<Label>Upload Image</Label>
					<Form.Control
						onChange={e => setUploadImage(e.target.files)}
						type="file"
					/>
				</Form.Group>
			</FormRow>
			<FormRow>
				<Form.Group controlId="unit-sku-input">
					<Label>Unit SKU</Label>
					<Form.Control
						onChange={e => setUnitSKU(e.target.value)}
						type="text"
						value={unitSKU}
					/>
				</Form.Group>
				<Form.Group controlId="case-sku-input">
					<Label>Case SKU</Label>
					<Form.Control
						onChange={e => setCaseSKU(e.target.value)}
						type="text"
						value={caseSKU}
					/>
				</Form.Group>
			</FormRow>
			<FormRow>
				<Form.Group controlId="product-short-name-input">
					<Label>Product Short Name</Label>
					<Form.Control
						onChange={e => setProductShortName(e.target.value)}
						type="text"
						value={productShortName}
					/>
				</Form.Group>
				<Form.Group controlId="product-long-name-input">
					<Label>Product Long Name</Label>
					<Form.Control
						onChange={e => setProductLongName(e.target.value)}
						type="text"
						value={productLongName}
					/>
				</Form.Group>
			</FormRow>
			<Form.Group controlId="product-description-textarea">
				<Label>Product Description</Label>
				<Form.Control
					as="textarea"
					onChange={e => setProductDescription(e.target.value)}
					rows="3"
					value={productDescription}
				/>
			</Form.Group>
			<FormRow>
				<Form.Group controlId="category-select">
					<Label>Category</Label>
					<Form.Control
						as="select"
						onChange={e => setCategory(e.target.value)}
						value={category}
					>
						<option>Tea</option>
						<option>Liquid</option>
						<option>Capsules</option>
						<option>Raw</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="copacker-select">
					<Label>Copacker</Label>
					<Form.Control
						as="select"
						onChange={e => setCopacker(e.target.value)}
						value={copacker}
					>
						<option>Davidsons</option>
						<option>Nutra Science</option>
						<option>Liquid Nutra</option>
					</Form.Control>
				</Form.Group>
			</FormRow>
			<Form.Group controlId="certifications">
				<Label>Certifications</Label>
				<Form.Control
					as="select"
					multiple
					onChange={updateCertifications}
				>
					<option>Organic</option>
					<option>Kosher</option>
					<option>Gluten Free</option>
					<option>Other</option>
				</Form.Control>
			</Form.Group>
			<StyledButtonToolbar>
				<LinkContainer to="/items">
					<Button variant="link">Cancel</Button>
				</LinkContainer>
				<ActionButtons>
					<Button
						id="clear-inputs-button"
						onClick={clearInputs}
						variant="light"
					>
						Clear
					</Button>
					{ sku ? (
						<Button
							id="update-item-button"
							onClick={updateCurrentItem}
							variant="primary"
						>
							Update Item
						</Button>
					) : (
						<Button
							id="add-item-button"
							onClick={addNewItem}
							variant="primary"
						>
							Add Item
						</Button>
					)}
				</ActionButtons>
			</StyledButtonToolbar>
		</StyledForm>
	);
};

Item.propTypes = {
	addItem: PropTypes.func.isRequired,
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	updateItem: PropTypes.func.isRequired,
};

Item.defaultProps = {
	error: null,
};

export default Item;
