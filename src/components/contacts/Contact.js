import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import { addContact } from '../../services/contactsService';
import {
	FormRow,
	Label,
	PageHeader,
	StyledButtonToolbar,
	StyledForm
} from '../shared/StyledComponents';

const ActionButtons = styled.div`
	flex-grow: 1;
	text-align: right;
`;

const NameRow = styled(Form.Row)`
	margin-left: unset;
	margin-right: unset;

	.form-group {
		width: 100%;
	}

	@media (min-width: 700px) {
		display: flex;
		flex-wrap: nowrap;

		.form-group {
			flex: 0 1 80px;
			width: auto;

			&:not(:first-child) {
				flex: 1 1 auto;
				margin-left: 16px;
			}
		}
	}
`;

const Contact = () => {
	const [accountNumber, setAccountNumber] = useState();
	const [address, setAddress] = useState();
	const [bankName, setBankName] = useState();
	const [contactPrefix, setContactPrefix] = useState();
	const [contactFirstName, setContactFirstName] = useState();
	const [contactLastName, setContactLastName] = useState();
	const [country, setCountry] = useState();
	const [email, setEmail] = useState();
	const [leadTime, setLeadTime] = useState();
	const [message, setMessage] = useState();
	const [messageType, setMessageType] = useState();
	const [mobilePhone, setMobilePhone] = useState();
	// const [purchaseOrder, setPurchaseOrder] = useState();
	const [state, setState] = useState();
	const [type, setType] = useState();
	const [vendorName, setVendorName] = useState();
	const [website, setWebsite] = useState();
	const [workPhone, setWorkPhone] = useState();

	const addNewContact = (e) => {
		e.preventDefault();

		const contact = {
			accountNumber,
			address,
			bankName,
			contactPrefix,
			contactFirstName,
			contactLastName,
			country,
			email,
			leadTime,
			mobilePhone,
			state,
			type,
			vendorName,
			website,
			workPhone,
		};

		addContact(contact).then(
			() => {
				setMessage('New contact added successfully.');
				setMessageType('success');
			},
			(error) => {
				setMessage(JSON.stringify(error));
				setMessageType('danger');
			}
		);
	};

	const saveContact = () => {
		/* no-op */
	};

	const clearInputs = () => {
		setAccountNumber();
		setAddress();
		setBankName();
		setContactPrefix();
		setContactFirstName();
		setContactLastName();
		setCountry();
		setEmail();
		setLeadTime();
		setMobilePhone();
		setState();
		setType();
		setVendorName();
		setWebsite();
		setWorkPhone();
	};

	return (
		<StyledForm>
			<PageHeader>New Contact</PageHeader>
			{ message && (
				<Alert variant={messageType}>{message}</Alert>
			)}
			<FormRow>
				<Form.Group as={Form.Col} controlId="type-select">
					<Label>Contact Type</Label>
					<Form.Control
						as="select"
						onChange={e => setType(e.target.value)}
						value={type}
					>
						<option>Supplier</option>
						<option>Contact Manufacturer</option>
						<option>Other</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="vendor-name-input">
					<Label>Company Name</Label>
					<Form.Control
						onChange={e => setVendorName(e.target.value)}
						type="text"
						value={vendorName}
					/>
				</Form.Group>
			</FormRow>
			<NameRow>
				<Form.Group as={Form.Col} controlId="prefix-select">
					<Label>Prefix</Label>
					<Form.Control
						as="select"
						onChange={e => setContactPrefix(e.target.value)}
						value={contactPrefix}
					>
						<option>Mr.</option>
						<option>Mrs.</option>
						<option>Ms.</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="first-name-input">
					<Label>First Name</Label>
					<Form.Control
						onChange={e => setContactFirstName(e.target.value)}
						type="text"
						value={contactFirstName}
					/>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="last-name-input">
					<Label>Last Name</Label>
					<Form.Control
						onChange={e => setContactLastName(e.target.value)}
						type="text"
						value={contactLastName}
					/>
				</Form.Group>
			</NameRow>
			<Form.Group id="email-input">
				<Label>Contact Email</Label>
				<Form.Control
					onChange={e => setEmail(e.target.value)}
					type="email"
					value={email}
				/>
			</Form.Group>
			<FormRow>
				<Form.Group controlId="work-phone-input">
					<Label>Work Phone</Label>
					<Form.Control
						onChange={e => setWorkPhone(e.target.value)}
						type="tel"
						value={workPhone}
					/>
				</Form.Group>
				<Form.Group controlId="mobile-phone-input">
					<Label>Mobile Phone</Label>
					<Form.Control
						onChange={e => setMobilePhone(e.target.value)}
						type="tel"
						value={mobilePhone}
					/>
				</Form.Group>
			</FormRow>
			<Form.Group id="website-input">
				<Label>Website</Label>
				<Form.Control
					onChange={e => setWebsite(e.target.value)}
					type="url"
					value={website}
				/>
			</Form.Group>
			<Form.Group id="address-input">
				<Label>Address</Label>
				<Form.Control
					onChange={e => setAddress(e.target.value)}
					type="text"
					value={address}
				/>
			</Form.Group>
			<FormRow>
				<Form.Group controlId="state-input">
					<Label>State</Label>
					<Form.Control
						onChange={e => setState(e.target.value)}
						type="text"
						value={state}
					/>
				</Form.Group>
				<Form.Group controlId="country-input">
					<Label>Country</Label>
					<Form.Control
						onChange={e => setCountry(e.target.value)}
						type="text"
						value={country}
					/>
				</Form.Group>
			</FormRow>
			<Form.Group controlId="lead-time-input">
				<Label>Lead Time</Label>
				<Form.Control
					onChange={e => setLeadTime(e.target.value)}
					type="number"
					value={leadTime}
				/>
			</Form.Group>
			<FormRow>
				<Form.Group controlId="bank-name-input">
					<Label>Bank Name</Label>
					<Form.Control
						onChange={e => setBankName(e.target.value)}
						type="text"
						value={bankName}
					/>
				</Form.Group>
				<Form.Group controlId="account-number-input">
					<Label>Account No.</Label>
					<Form.Control
						onChange={e => setAccountNumber(e.target.value)}
						type="number"
						value={accountNumber}
					/>
				</Form.Group>
			</FormRow>
			<StyledButtonToolbar>
				<LinkContainer to="/contacts">
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
					<Button
						id="add-contact-button"
						onClick={addNewContact}
						variant="primary"
					>
						Add Contact
					</Button>
				</ActionButtons>
			</StyledButtonToolbar>
		</StyledForm>
	);
};

export default Contact;
