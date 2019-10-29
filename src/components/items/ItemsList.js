import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItem } from './actions';

function Summary({ items, dispatch }) {
	return (
		<>
			<Link
				to="/items/new"
				className="btn orange-back mx-2 my-2 float-md-right"
			>
				New Item
			</Link>
			<h4> Finished Items </h4>
			<ItemsTable items={items} dispatch={dispatch} />
		</>
	);
}

function ItemsTable({ items, dispatch }) {
	const [editing, setEditing] = useState(false);
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">SKU</th>
					<th scope="col">Item Name</th>
					<th scope="col">Vendor</th>
					<th scope="col">Stock on Hand</th>
					<th scope="col">Warehouse</th>
					<th scope="col">
						<button
							type="button"
							className="btn oi oi-x"
							onClick={() => setEditing(!editing)}
						></button>
						<button
							type="button"
							className="btn oi oi-x"
							onClick={() => setEditing(!editing)}
							disabled={!editing}
						></button>
					</th>
				</tr>
			</thead>
			<tbody>
				{items.map(item => {
					return (
						<tr key={item.SKU}>
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
									className="btn oi oi-x"
									onClick={() => dispatch(deleteItem(item))}
								></button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function s2p(s) {
	return {
		items: s.items,
	};
}

export default connect(s2p)(Summary);
