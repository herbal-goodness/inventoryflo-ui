import React from 'react';
import { Link } from 'react-router-dom';

function TransfersSummary() {
	return (
		<>
			<Link
				to="/transfers/new"
				className="btn orange-back mx-2 my-2 float-right"
			>
				New Transfer
			</Link>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Reference #</th>
						<th scope="col">Product Name</th>
						<th scope="col">Qty.</th>
						<th scope="col">From Warehouse</th>
						<th scope="col">To Warehouse</th>
						<th scope="col">Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row"> </th>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<th scope="row"> </th>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<th scope="row"> </th>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default TransfersSummary;
