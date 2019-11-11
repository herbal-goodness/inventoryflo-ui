import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import mockContacts from '../../mocks/Contacts';
import { getContacts } from '../../services/contacts.service';
import DataGrid from '../shared/DataGrid';
import { PageHeader } from '../shared/StyledComponents';
import { columns } from './config';

const Wrapper = styled.section`
	width: 100%;
`;

const ContactsSummary = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts().then(
			({ data }) => {
				setContacts(data);
			},
			(error) => {
				console.error(error);

				setContacts(mockContacts);
			}
		);
	}, []);

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
};

export default ContactsSummary;
