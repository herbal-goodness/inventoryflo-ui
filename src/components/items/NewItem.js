import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

import { Label } from '../shared/StyledComponents';

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

const StyledHeader = styled.h2`
	margin: 12px 0 24px;
	width: 100%;
`;

const StyledTextarea = styled(Form.Group)`
	display: flex;
	flex-wrap: nowrap;
	width: 100% !important;
`;

const NewItem = () => {
	const [type, setType] = useState();
	const [unitSKU, setUnitSKU] = useState();
	const [caseSKU, setCaseSKU] = useState();
	const [productShortName, setProductShortName] = useState();
	const [productLongName, setProductLongName] = useState();
	const [productDescription, setProductDescription] = useState();
	const [category, setCategory] = useState();
	const [copacker, setCopacker] = useState();
	const [certifications, setCertifications] = useState([]);
	const [uploadImage, setUploadImage] = useState();
	const [seoInfo, setSEOInfo] = useState();
	const [shopifyInfo, setShopifyInfo] = useState();
	const [amazonInfo, setAmazonInfo] = useState();

	const updateCertifications = (e) => {
		const cert = e.target.value;

		if (!e.target.checked) {
			const updatedCerts = certifications.filter(certification => certification !== cert);
			setCertifications(updatedCerts);
		} else {
			setCertifications([...certifications, cert]);
		}
	};

	return (
		<StyledForm>
			<StyledHeader>New Product</StyledHeader>
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
					id="upload-image-input"
					onChange={e => setUploadImage(e.target.files)}
					type="file"
				/>
			</StyledFormGroup>
			<StyledFormGroup controlId="unit-sku-input">
				<Label>Unit SKU</Label>
				<Form.Control
					id="unit-sku-input"
					onChange={e => setUnitSKU(e.target.value)}
					type="text"
					value={unitSKU}
				/>
			</StyledFormGroup>
			<StyledFormGroup controlId="case-sku-input">
				<Label>Case SKU</Label>
				<Form.Control
					id="case-sku-input"
					onChange={e => setCaseSKU(e.target.value)}
					type="text"
					value={caseSKU}
				/>
			</StyledFormGroup>
			<StyledFormGroup controlId="product-short-name-input">
				<Label>Product Short Name</Label>
				<Form.Control
					id="product-short-name-input"
					onChange={e => setProductShortName(e.target.value)}
					type="text"
					value={productShortName}
				/>
			</StyledFormGroup>
			<StyledFormGroup controlId="product-long-name-input">
				<Label>Product Long Name</Label>
				<Form.Control
					id="product-long-name-input"
					onChange={e => setProductLongName(e.target.value)}
					type="text"
					value={productLongName}
				/>
			</StyledFormGroup>
			<StyledTextarea controlId="product-description-textarea">
				<Label>Product Description</Label>
				<Form.Control
					as="textarea"
					id="product-description-textarea"
					onChange={e => setProductDescription(e.target.value)}
					rows="3"
					value={productDescription}
				/>
			</StyledTextarea>
			<StyledFormGroup controlId="category-select">
				<Label>Category</Label>
				<Form.Control
					as="select"
					id="category-select"
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
					id="copacker-select"
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
					id="certifications-kosher"
					inline
					label="Other"
					name="certifications"
					onClick={updateCertifications}
					type="checkbox"
					value="Other"
				/>
			</StyledFormGroup>
			<StyledButtonToolbar>
				<Button variant="primary">Add Item</Button>
				<Button variant="light">Clear</Button>
				<Button variant="link">Cancel</Button>
			</StyledButtonToolbar>
		</StyledForm>
	);
};

export default NewItem;
