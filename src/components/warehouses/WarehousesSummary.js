import React from 'react';

function WarehouseSummary() {
	return (
		<>
			<CardRow
				title="E Fulfillment Warehouse"
				type="EFS"
				addr="2150 South Central Express"
				city="McKinney"
				state="Texas"
				country="USA"
				email="abc@email.com"
			/>
			<CardRow
				title="Davidsons Warehouse"
				type="EFS"
				addr="2150 South Central Express"
				city="McKinney"
				state="Texas"
				country="USA"
				email="abc@email.com"
			/>
		</>
	);
}

function CardRow({ title, type, addr, city, state, country, email }) {
	return (
		<div className="row justify-content-md-center">
			<div className="card col-md-3 text-center">
				<div className="card-body">
					<h1 className="card-title">{title}</h1>
					<h1 className="card-text">({type})</h1>
				</div>
			</div>
			<div className="card col-md-6">
				<div className="card-body">
					{addr}
					<br />
					{city}
					<br />
					{state}
					<br />
					{country}
					<br />
					{email}
				</div>
			</div>
		</div>
	);
}

export default WarehouseSummary;
