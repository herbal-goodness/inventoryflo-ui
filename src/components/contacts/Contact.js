import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

import { addContact } from '../../services/contacts.service';
import { Label, PageHeader } from '../shared/StyledComponents';

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
	const [mobilePhone, setMobilePhone] = useState();
	// const [purchaseOrder, setPurchaseOrder] = useState();
	const [state, setState] = useState();
	const [type, setType] = useState();
	const [vendorName, setVendorName] = useState();
	const [website, setWebsite] = useState();
	const [workPhone, setWorkPhone] = useState();

	return (
		<Form>
			<PageHeader>New Contact</PageHeader>
			<Form.Group>
				<Label>Contact Type</Label>
				<Form.Control
					as="select"
					id="type-select"
					onChange={e => setType(e.target.value)}
					value={type}
				>
					<option>Supplier</option>
					<option>Contact Manufacturer</option>
					<option>Other</option>
				</Form.Control>
			</Form.Group>
			<Form.Group>
				<Form.Control
					as="select"
					id="prefix-select"
					onChange={e => setContactPrefix(e.target.value)}
					value={contactPrefix}
				>
					<option>Mr.</option>
					<option>Mrs.</option>
					<option>Ms.</option>
				</Form.Control>
			</Form.Group>
			<Form.Group>
				<Label>First Name</Label>
				<Form.Control
					id="first-name-input"
					onChange={e => setContactFirstName(e.target.value)}
					type="text"
					value={contactFirstName}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Last Name</Label>
				<Form.Control
					id="last-name-input"
					onChange={e => setContactLastName(e.target.value)}
					type="text"
					value={contactLastName}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Company Name</Label>
				<Form.Control
					id="vendor-name-input"
					onChange={e => setVendorName(e.target.value)}
					type="text"
					value={vendorName}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Contact Email</Label>
				<Form.Control
					id="email-input"
					onChange={e => setEmail(e.target.value)}
					type="email"
					value={email}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Work Phone</Label>
				<Form.Control
					id="work-phone-input"
					onChange={e => setWorkPhone(e.target.value)}
					type="tel"
					value={workPhone}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Mobile Phone</Label>
				<Form.Control
					id="mobile-phone-input"
					onChange={e => setMobilePhone(e.target.value)}
					type="tel"
					value={mobilePhone}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Website</Label>
				<Form.Control
					id="website-input"
					onChange={e => setWebsite(e.target.value)}
					type="url"
					value={website}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Address</Label>
				<Form.Control
					id="address-input"
					onChange={e => setAddress(e.target.value)}
					type="text"
					value={address}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Country</Label>
				<Form.Control
					id="country-input"
					onChange={e => setCountry(e.target.value)}
					type="text"
					value={country}
				/>
			</Form.Group>
			<Form.Group>
				<Label>State</Label>
				<Form.Control
					id="state-input"
					onChange={e => setState(e.target.value)}
					type="text"
					value={state}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Lead Time</Label>
				<Form.Control
					id="lead-time-input"
					onChange={e => setLeadTime(e.target.value)}
					type="number"
					value={leadTime}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Bank Name</Label>
				<Form.Control
					id="bank-name-input"
					onChange={e => setBankName(e.target.value)}
					type="text"
					value={bankName}
				/>
			</Form.Group>
			<Form.Group>
				<Label>Account No.</Label>
				<Form.Control
					id="account-number-input"
					onChange={e => setAccountNumber(e.target.value)}
					type="number"
					value={accountNumber}
				/>
			</Form.Group>
		</Form>
	);
};

export default Contact;
