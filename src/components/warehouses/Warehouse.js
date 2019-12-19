import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import { addWarehouse } from '../../services/warehousesService';
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

const Warehouse = () => {
	const [city, setCity] = useState();
	const [country, setCountry] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();
	const [messageType, setMessageType] = useState();
	const [phone, setPhone] = useState();
	const [state, setState] = useState();
	const [streetOne, setStreetOne] = useState();
	const [streetTwo, setStreetTwo] = useState();
	const [warehouseName, setWarehouseName] = useState();
	const [zipCode, setZipCode] = useState();

	const addNewWarehouse = (e) => {
		e.preventDefault();

		const warehouse = {
			city,
			country,
			email,
			phone,
			state,
			streetOne,
			streetTwo,
			warehouseName,
			zipCode,
		};

		addWarehouse(warehouse).then(
			() => {
				setMessage('New warehouse added successfully.');
				setMessageType('success');
			},
			(error) => {
				setMessage(JSON.stringify(error));
				setMessageType('danger');
			}
		);
	};

	const clearInputs = () => {
		setCity();
		setCountry();
		setEmail();
		setMessage();
		setMessageType();
		setPhone();
		setState();
		setStreetOne();
		setStreetTwo();
		setWarehouseName();
		setZipCode();
	};

	return (
		<StyledForm>
			<PageHeader>New Warehouse</PageHeader>
			{ message && (
				<Alert variant={messageType}>{message}</Alert>
			)}
			<Form.Group controlId="warehouse-name-input">
				<Label>Warehouse Name</Label>
				<Form.Control
					onChange={e => setWarehouseName(e.target.value)}
					type="text"
					value={warehouseName}
				/>
			</Form.Group>
			<FormRow>
				<Form.Group as={Form.Col} controlId="street-one-input">
					<Label>Street 1</Label>
					<Form.Control
						onChange={e => setStreetOne(e.target.value)}
						type="text"
						value={streetOne}
					/>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="street-two-input">
					<Label>Street 2</Label>
					<Form.Control
						onChange={e => setStreetTwo(e.target.value)}
						type="text"
						value={streetTwo}
					/>
				</Form.Group>
			</FormRow>
			<FormRow>
				<Form.Group as={Form.Col} controlId="city-input">
					<Label>City</Label>
					<Form.Control
						onChange={e => setCity(e.target.value)}
						type="text"
						value={city}
					/>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="state-input">
					<Label>State</Label>
					<Form.Control
						onChange={e => setState(e.target.value)}
						type="text"
						value={state}
					/>
				</Form.Group>
			</FormRow>
			<FormRow>
				<Form.Group as={Form.Col} controlId="zip-code-input">
					<Label>Zip Code</Label>
					<Form.Control
						onChange={e => setZipCode(e.target.value)}
						type="text"
						value={zipCode}
					/>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="country-input">
					<Label>Country</Label>
					<Form.Control
						onChange={e => setCountry(e.target.value)}
						type="text"
						value={country}
					/>
				</Form.Group>
			</FormRow>
			<FormRow>
				<Form.Group as={Form.Col} controlId="phone-input">
					<Label>Phone</Label>
					<Form.Control
						onChange={e => setPhone(e.target.value)}
						type="tel"
						value={phone}
					/>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="email-input">
					<Label>Email</Label>
					<Form.Control
						onChange={e => setEmail(e.target.value)}
						type="email"
						value={email}
					/>
				</Form.Group>
			</FormRow>
			<StyledButtonToolbar>
				<LinkContainer to="/warehouses">
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
						id="add-warehouse-button"
						onClick={addNewWarehouse}
						variant="primary"
					>
						Add Warehouse
					</Button>
				</ActionButtons>
			</StyledButtonToolbar>
		</StyledForm>
	);
};

export default Warehouse;
