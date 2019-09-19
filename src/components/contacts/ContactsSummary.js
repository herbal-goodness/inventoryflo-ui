import React from 'react';
import { Link } from 'react-router-dom';

function ContactsSummary() {
	let contacts = [
		{
			name: 'Hamlet Ford',
			company: 'Davidsons',
			type: 'Supplier',
			email: 'abc1@mail.com',
			po: 'HB145',
			country: 'USA',
		},
		{
			name: 'Romeo Toyota',
			company: 'Nutra Science',
			type: 'Manufacturer',
			email: 'abc2@mail.com',
			po: 'MH394',
			country: 'USA',
		},
		{
			name: 'Othello Hyundai',
			company: 'Nutra Science',
			type: 'Manufacturer',
			email: 'abc3@mail.com',
			po: 'QT314',
			country: 'USA',
		},
		{
			name: 'Juliet Honda',
			company: 'Davidsons',
			type: 'Supplier',
			email: 'abc4@mail.com',
			po: 'PO276',
			country: 'USA',
		},
		{
			name: 'Lear Tesla',
			company: 'Davidsons',
			type: 'Supplier',
			email: 'abc5@mail.com',
			po: 'CB974',
			country: 'USA',
		},
	];
	return (
		<>
			<Link
				to="/contacts/new"
				className="btn orange-back mx-2 my-2 float-md-right"
			>
				New Contact
			</Link>
			<table className="table mx-2">
				<thead>
					<tr>
						<th scope="col">Contact Name</th>
						<th scope="col">Company</th>
						<th scope="col">Vendor Type</th>
						<th scope="col">Contact Email</th>
						<th scope="col">Pending PO</th>
						<th scope="col">Country</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map(contact => {
						return (
							<tr>
								<th scope="row">{contact.name}</th>
								<td> {contact.company}</td>
								<td> {contact.type}</td>
								<td> {contact.email}</td>
								<td> {contact.po}</td>
								<td> {contact.country}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default ContactsSummary;
