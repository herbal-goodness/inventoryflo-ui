import React, { Fragment, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components';

import { addItem } from '../../services/items.service';
import { Label, PageHeader } from '../shared/StyledComponents';

const StyledButtonToolbar = styled(ButtonToolbar)`
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	margin-top: 24px;
	padding: 8px 0;
	width: 100%;

	button {
		margin: 0 16px;
	}
`;

const StyledCheck = styled(Form.Check)`
	:not(:last-of-type) {
		margin-right: 18px;
	}
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 32px;
	padding: 0 16px;
	width: 100%;
`;

const StyledFormGroup = styled(Form.Group)`
	align-items: flex-start;
	display: flex;
	flex-wrap: nowrap;
	margin: 32px 0;
	width: 100%;

	.form-control,
	.form-control-file {
		flex: 1 1;
		width: unset;
	}

	@media (min-width: 922px) {
		width: 50%;

		:nth-of-type(-2n+5),
		:nth-of-type(2n+8) {
			padding-right: 24px;
		}

		:nth-of-type(-2n+6),
		:nth-of-type(2n+7) {
			padding-left: 24px;
		}

		:last-of-type {
			width: 100%;
		}
	}
`;

const StyledTextarea = styled(Form.Group)`
	display: flex;
	flex-wrap: nowrap;
	width: 100% !important;
`;

const NewItem = () => {
	const [category, setCategory] = useState();
	const [caseSKU, setCaseSKU] = useState();
	const [certifications, setCertifications] = useState([]);
	const [copacker, setCopacker] = useState();
	const [message, setMessage] = useState();
	const [messageType, setMessageType] = useState();
	const [productDescription, setProductDescription] = useState();
	const [productLongName, setProductLongName] = useState();
	const [productShortName, setProductShortName] = useState();
	const [type, setType] = useState();
	const [unitSKU, setUnitSKU] = useState();
	const [uploadImage, setUploadImage] = useState();
	// const [seoInfo, setSEOInfo] = useState();
	// const [shopifyInfo, setShopifyInfo] = useState();
	// const [amazonInfo, setAmazonInfo] = useState();

	const updateCertifications = (e) => {
		const cert = e.target.value;

		if (!e.target.checked) {
			const updatedCerts = certifications.filter(certification => certification !== cert);
			setCertifications(updatedCerts);
		} else {
			setCertifications([...certifications, cert]);
		}
	};

	const addNewItem = (e) => {
		e.preventDefault();

		const item = {
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

		addItem(item).then(
			(response) => {
				console.log(response);
				setMessage('New item added successfully.');
				setMessageType('success');
			},
			(error) => {
				console.log(error);
				setMessage(JSON.stringify(error));
				setMessageType('danger');
			}
		);
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
		<Fragment>
			<PageHeader>New Item</PageHeader>
			{ message && (
				<Alert variant={messageType}>{message}</Alert>
			)}
			<StyledForm onSubmit={addItem}>
				<StyledFormGroup controlId="type">
					<Label>Type</Label>
					<StyledCheck
						defaultChecked={type === 'Turnkey'}
						id="type-turnkey"
						inline
						label="Turnkey"
						name="type"
						onClick={(e) => setType(e.target.value)}
						type="radio"
						value="Turnkey"
					/>
					<StyledCheck
						defaultChecked={type === 'Composite Unit'}
						id="type-composite-unit"
						inline
						label="Composite Unit"
						name="type"
						onClick={(e) => setType(e.target.value)}
						type="radio"
						value="Composite Unit"
					/>
				</StyledFormGroup>
				<StyledFormGroup controlId="upload-image-input">
					<Label>Upload Image</Label>
					<Form.Control
						onChange={e => setUploadImage(e.target.files)}
						type="file"
					/>
				</StyledFormGroup>
				<StyledFormGroup controlId="unit-sku-input">
					<Label>Unit SKU</Label>
					<Form.Control
						onChange={e => setUnitSKU(e.target.value)}
						type="text"
						value={unitSKU}
					/>
				</StyledFormGroup>
				<StyledFormGroup controlId="case-sku-input">
					<Label>Case SKU</Label>
					<Form.Control
						onChange={e => setCaseSKU(e.target.value)}
						type="text"
						value={caseSKU}
					/>
				</StyledFormGroup>
				<StyledFormGroup controlId="product-short-name-input">
					<Label>Product Short Name</Label>
					<Form.Control
						onChange={e => setProductShortName(e.target.value)}
						type="text"
						value={productShortName}
					/>
				</StyledFormGroup>
				<StyledFormGroup controlId="product-long-name-input">
					<Label>Product Long Name</Label>
					<Form.Control
						onChange={e => setProductLongName(e.target.value)}
						type="text"
						value={productLongName}
					/>
				</StyledFormGroup>
				<StyledTextarea controlId="product-description-textarea">
					<Label>Product Description</Label>
					<Form.Control
						as="textarea"
						onChange={e => setProductDescription(e.target.value)}
						rows="3"
						value={productDescription}
					/>
				</StyledTextarea>
				<StyledFormGroup controlId="category-select">
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
				</StyledFormGroup>
				<StyledFormGroup controlId="copacker-select">
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
				</StyledFormGroup>
				<StyledFormGroup controlId="certifications">
					<Label>Certifications</Label>
					<StyledCheck
						defaultChecked={certifications.includes('Organic')}
						id="certifications-organic"
						inline
						label="Organic"
						name="certifications"
						onClick={updateCertifications}
						type="checkbox"
						value="Organic"
					/>
					<StyledCheck
						defaultChecked={certifications.includes('Kosher')}
						id="certifications-kosher"
						inline
						label="Kosher"
						name="certifications"
						onClick={updateCertifications}
						type="checkbox"
						value="Kosher"
					/>
					<StyledCheck
						defaultChecked={certifications.includes('Other')}
						id="certifications-other"
						inline
						label="Other"
						name="certifications"
						onClick={updateCertifications}
						type="checkbox"
						value="Other"
					/>
				</StyledFormGroup>
				<StyledButtonToolbar>
					<Button
						id="add-item-button"
						onClick={addNewItem}
						variant="primary"
					>
						Add Item
					</Button>
					<Button 
						id="clear-inputs-button"
						onClick={clearInputs}
						variant="light"
					>
						Clear
					</Button>
					<LinkContainer to="/items">
						<Button variant="link">Cancel</Button>
					</LinkContainer>
				</StyledButtonToolbar>
			</StyledForm>
		</Fragment>
	);
};

export default NewItem;
