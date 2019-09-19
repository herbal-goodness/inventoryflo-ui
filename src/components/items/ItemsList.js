import React from 'react';
import { Link } from 'react-router-dom';

function Summary({ items, setItems }) {
	return (
		<>
			<Link
				to="/items/new"
				className="btn orange-back mx-2 my-2 float-md-right"
			>
				New Item
			</Link>
			<h4> Finished Items </h4>
			<GenericTable items={items} setItems={setItems} />
		</>
	);
}

function GenericTable({ items, setItems }) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">SKU</th>
					<th scope="col">Item Name</th>
					<th scope="col">Vendor</th>
					<th scope="col">Stock on Hand</th>
					<th scope="col">Warehouse</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{items.map(item => {
					return (
						<tr>
							<th scope="row">
								{' '}
								<Link to={'/items/' + item.SKU}>{item.SKU}</Link>
							</th>
							<td>{item['Item Name']}</td>
							<td>{item['Vendor']}</td>
							<td>{item['Stock On Hand']}</td>
							<td>{item.Warehouse}</td>
							<td>
								<Link
									to={'/items/' + item.SKU}
									className="btn oi oi-pencil"
								></Link>
								<button
									type="button"
									class="btn oi oi-x"
									onClick={() => deleteItem(item.SKU, items, setItems)}
								></button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function deleteItem(sku, items, setItems) {
	setItems(
		items.filter(function(val, idx, arr) {
			return val.SKU != sku;
		}),
	);
}

export default Summary;
