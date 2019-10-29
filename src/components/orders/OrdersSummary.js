import React from 'react';
import { Link } from 'react-router-dom';

function Summary() {
	return (
		<>
			<Link
				to="/purchase-orders/new"
				className="btn orange-back mx-2 my-2 float-right"
			>
				New PO
			</Link>
			<GenericTable />
		</>
	);
}

function GenericTable() {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">PO #</th>
					<th scope="col">Vendor</th>
					<th scope="col"> Items Ordered</th>
					<th scope="col">Qty.</th>
					<th scope="col">Status</th>
					<th scope="col">Link to PO Folder</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row"> HB1077</th>
					<td> Davidsons </td>
					<td>
						{' '}
						<p>Papaya Leaf</p>
						<p>Granula Tea</p>
					</td>
					<td>
						{' '}
						<p>360 Cases</p>
						<p>190 Units</p>
					</td>
					<td>
						<div className="dropdown">
							<button
								className="btn dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Active
							</button>
							<div
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton"
							>
								<div className="dropdown-item">Active</div>
								<div className="dropdown-item">On Hold</div>
								<div className="dropdown-item">Issued</div>
								<div className="dropdown-item">Delivered</div>
								<div className="dropdown-item">Checked In</div>
								<div className="dropdown-item">Closed</div>
								<div className="dropdown-item">Cancelled</div>
							</div>
						</div>{' '}
					</td>
					<td> https://planthub.com </td>
				</tr>
			</tbody>
		</table>
	);
}

export default Summary;
