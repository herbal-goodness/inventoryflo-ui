import React from 'react';
import getItems from '../../api/Items';
import { Link } from 'react-router-dom';

function Summary() {
	return (
		<>
			<h4> Finished Items </h4>
			<GenericTable />
			<h4> Raws and Packaging </h4>
			<GenericTable />
		</>
	);
}

function GenericTable() {
	let items = getItems();
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>SKU</th>
					<th scope='col'>Item Name</th>
					<th scope='col'>Vendor</th>
					<th scope='col'>Stock on Hand</th>
					<th scope='col'>Warehouse</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				{items.map(item => {
					return (
						<tr>
							<th scope='row'>
								{' '}
								<Link to={'/items/' + item.SKU}>{item.SKU}</Link>
							</th>
							<td>{item['Item Name']}</td>
							<td>{item['Preferred Vendor']}</td>
							<td>{item['Stock On Hand']}</td>
							<td>{item.Manufacturer}</td>
							<td>
								<button type='button' className='btn oi oi-pencil'></button>
								<button type='button' class='btn oi oi-x'></button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Summary;
