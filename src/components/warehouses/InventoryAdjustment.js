import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

// import { getItems } from '../../services/itemsService';
import DataGrid from '../shared/DataGrid';
import {
	FormRow,
	Label,
	PageHeader,
	StyledButtonToolbar,
	StyledForm
} from '../shared/StyledComponents';
import { inventoryAdjustmentColumns } from './config';

const ActionButtons = styled.div`
	flex-grow: 1;
	text-align: right;
`;

const DataGridContainer = styled.div`
	width: unset !important;
`;

const InventoryAdjustment = () => {
	const [date, setDate] = useState();
	const [items, setItems] = useState([]);
	const [message, setMessage] = useState();
	const [messageType, setMessageType] = useState();
	const [mode, setMode] = useState();
	const [reason, setReason] = useState();
	const [referenceNumber, setReferenceNumber] = useState();
	const [warehouse, setWarehouse] = useState();

	const clearInputs = () => {
		setDate('');
		setMessage('');
		setMessageType('');
		setMode(undefined);
		setReason('');
		setReferenceNumber('');
		setWarehouse(undefined);
	};

	const addNewInventoryAdjustment = (e) => {
		e.preventDefault();
	};

	return (
		<StyledForm>
			<PageHeader>Inventory Adjustment</PageHeader>
			{ message && (
				<Alert variant={messageType}>{message}</Alert>
			)}
			<FormRow>
				<Form.Group as={Form.Col} controlId="mode-input">
					<Label>Mode of Adjustment</Label>
					<Form.Control
						as="select"
						onChange={e => setMode(e.target.value)}
						value={mode}
					>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="warehouse-input">
					<Label>Warehouse</Label>
					<Form.Control
						as="select"
						onChange={e => setWarehouse(e.target.value)}
						value={warehouse}
					>
						<option>Warehouse 1</option>
						<option>Warehouse 2</option>
						<option>Warehouse 3</option>
					</Form.Control>
				</Form.Group>
			</FormRow>
			<FormRow>
				<Form.Group as={Form.Col} controlId="reference-number-input">
					<Label>Reference #</Label>
					<Form.Control
						onChange={e => setReferenceNumber(e.target.value)}
						type="text"
						value={referenceNumber}
					/>
				</Form.Group>
				<Form.Group as={Form.Col} controlId="date-input">
					<Label>Date</Label>
					<Form.Control
						onChange={e => setDate(e.target.value)}
						type="date"
						value={date}
					/>
				</Form.Group>
			</FormRow>
			<Form.Group controlId="date-input">
				<Label>Reason</Label>
				<Form.Control
					onChange={e => setReason(e.target.value)}
					type="text"
					value={reason}
				/>
			</Form.Group>
			<DataGridContainer>
				<DataGrid
					columns={inventoryAdjustmentColumns}
					rows={items}
				/>
			</DataGridContainer>
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
						onClick={addNewInventoryAdjustment}
						variant="primary"
					>
						Add Warehouse
					</Button>
				</ActionButtons>
			</StyledButtonToolbar>
		</StyledForm>
	);
};

export default InventoryAdjustment;
