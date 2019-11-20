import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import styled from 'styled-components';

import DataGrid from '../shared/DataGrid';
import { PageHeader } from '../shared/StyledComponents';
import { columns } from './config';

const Wrapper = styled.section`
	width: 100%;
`;

const ContactsSummary = ({
	contacts,
	error,
	getContacts,
	loading,
	updateContacts,
}) => {
	const [currentContacts, setCurrentContacts] = useState(contacts);
	const [changedContacts, setChangedContacts] = useState([]);

	useEffect(() => { getContacts(); }, [getContacts]);

	useEffect(() => {
		setCurrentContacts(contacts);
	}, [contacts]);

	const clearChanges = () => {
		setCurrentContacts(contacts);
		setChangedContacts([]);
	};

	const saveChanges = () => {
		updateContacts(changedContacts);
	};

	return (
		<Wrapper>
			<PageHeader>Contacts Summary</PageHeader>
			{ error && (
				<Alert variant="danger">{error.message}</Alert>
			)}
			<DataGrid
				columns={columns}
				enableCellSelect
				rows={currentContacts}
				trackedChanges={changedContacts}
				updateRows={setCurrentContacts}
				updateTrackedChanges={setChangedContacts}
			/>
			<ButtonToolbar>
				<Button
					disabled={changedContacts.length < 1}
					id="clear-changes-button"
					onClick={clearChanges}
					variant="light"
				>
					Clear Changes
				</Button>
				<Button
					disabled={changedContacts.length < 1}
					id="save-changes-button"
					onClick={saveChanges}
					variant="primary"
				>
					Save Changes
				</Button>
			</ButtonToolbar>
		</Wrapper>
	);
};

ContactsSummary.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.bool.isRequired,
	getContacts: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	updateContacts: PropTypes.func.isRequired,
};

export default ContactsSummary;
