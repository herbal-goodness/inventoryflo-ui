import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import mockContacts from '../../mocks/Contacts';
import { getContacts } from '../../services/contacts.service';
import DataGrid from '../shared/DataGrid';
import { PageHeader } from '../shared/StyledComponents';

const Wrapper = styled.section`
	width: 100%;
`;

const ContactsSummary = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts().then(
			(contacts) => {
				setContacts(contacts);
			},
			(error) => {
				console.error(error);

				setContacts(mockContacts);
			}
		);
	}, []);

	const columns = [
		{ key: 'name', name: 'Name', editable: false },
		{ key: 'company', name: 'Company', editable: true },
		{ key: 'type', name: 'Type', editable: true },
		{ key: 'email', name: 'Email', editable: true },
		{ key: 'po', name: 'PO', editable: true },
		{ key: 'country', name: 'Country', editable: true }
	];

	return (
		<Wrapper>
			<PageHeader>Contacts Summary</PageHeader>
			<DataGrid
				columns={columns}
				enableCellSelect
				rows={contacts}
				updateRows={setContacts}
			/>
		</Wrapper>
	);
}

export default ContactsSummary;
