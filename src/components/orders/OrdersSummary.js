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
						<div class="dropdown">
							<button
								class="btn dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Active
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" href="#">
									Active
								</a>
								<a class="dropdown-item" href="#">
									On Hold
								</a>
								<a class="dropdown-item" href="#">
									Issued
								</a>
								<a class="dropdown-item" href="#">
									Delivered
								</a>
								<a class="dropdown-item" href="#">
									Checked In
								</a>
								<a class="dropdown-item" href="#">
									Closed
								</a>
								<a class="dropdown-item" href="#">
									Cancelled
								</a>
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
