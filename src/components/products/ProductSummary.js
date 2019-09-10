import React from 'react';

function Summary() {
	return (
		<>
			<h4> Finished Products </h4>
			<GenericTable />
			<h4> Raws and Packaging </h4>
			<GenericTable />
		</>
	);
}

function GenericTable() {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">SKU</th>
					<th scope="col">Product Name</th>
					<th scope="col">Vendor</th>
					<th scope="col">Stock on Hand</th>
					<th scope="col">Warehouse</th>
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
	);
}

export default Summary;
