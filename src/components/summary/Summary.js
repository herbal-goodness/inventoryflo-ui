import React from 'react';
import { Link } from 'react-router-dom';

function Summary({ items, orders }) {
	let lowSkus = items.filter(function(val, idx, arr) {
		return val['Stock On Hand'] < 100 && val.SKU;
	});
	let incoming = items.filter(function(val, idx, arr) {
		return val.Incoming && val.SKU;
	});
	let topselling = items.filter(function(val, idx, arr) {
		return Math.random() < 0.05 && val.SKU;
	});
	return (
		<>
			<div>
				<h4>Purchase Order Activity</h4>
				<div className="row">
					<CardGeneric num="7" label="IN MANUFACTURE" cost="49,687" />
					<CardGeneric num="1" label="IN TRANSIT" cost="12,368" />
					<CardGeneric num="3" label="STALLED" cost="2,763" />
				</div>
				<div className="row">
					<CardGeneric num="2" label="CANCELLED" cost="6,724" />
					<CardGeneric num="6" label="DELIVERED" cost="36,927" />
					<CardGeneric num="4" label="CLOSED" cost="25,265" />
				</div>
			</div>
			<hr />
			<div>
				<div className="row">
					<h4 className="col-sm-4">Inventory Summary</h4>
					<h4 className="col-sm-4">Quantity In Hand: 215,765</h4>
					<h4 className="col-sm-4">Incoming Inventory: 18,000</h4>
				</div>
				<div className="row">
					<div className="col-sm-6 card">
						<div class="card-header">Inventory Details</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<p>
										Total No. of SKUs: <b>{items.length}</b>
									</p>
									<p className="orange">Low Stock SKUs:</p>
									<ul>
										{lowSkus.map(lowSku => {
											return (
												<li>
													<Link to={'/items/' + lowSku.SKU}>
														{lowSku.SKU + ': '}
													</Link>{' '}
													({lowSku['Stock On Hand']})
												</li>
											);
										})}
									</ul>
									<p className="orange">Incoming SKUs:</p>
									<ul>
										{incoming.map(sku => {
											return (
												<li>
													<Link to={'/items/' + sku.SKU}>{sku.SKU}</Link>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 card">
						<div class="card-header">Top Selling Items</div>
						<div className="card-body">
							<div className="row">
								<div className="col-sm-6">
									<ul>
										{topselling.map(sku => {
											return (
												<li>
													<Link to={'/items/' + sku.SKU}>{sku.SKU}</Link>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="col-sm-6 text-center">
									<div class="dropdown">
										<button
											class="btn blue-back dropdown-toggle"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Time Frame
										</button>
										<div
											class="dropdown-menu"
											aria-labelledby="dropdownMenuButton"
										>
											<a class="dropdown-item">Today</a>
											<a class="dropdown-item" href="#">
												Yesterday
											</a>
											<a class="dropdown-item" href="#">
												This Week
											</a>
											<a class="dropdown-item" href="#">
												Previous Week
											</a>
											<a class="dropdown-item" href="#">
												This Month
											</a>
											<a class="dropdown-item" href="#">
												Previous Month
											</a>
											<a class="dropdown-item" href="#">
												This Year
											</a>
											<a class="dropdown-item" href="#">
												Previous Year
											</a>
											<a class="dropdown-item" href="#">
												Custom
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function CardGeneric({ num, label, cost }) {
	return (
		<div className="col-sm-4 card text-center">
			<div className="card-body">
				<h1 className="card-title">{num}</h1>
				<p className="card-text">{label}</p>
				<p className="card-text">TOTAL COST ${cost}</p>
			</div>
		</div>
	);
}

export default Summary;
