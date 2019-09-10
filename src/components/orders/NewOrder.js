import React from 'react';

function NewOrder() {
	return (
		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="unitSku">PO #</label>
					<input className="form-control" id="unitSku" />
				</div>
				<div className="form-group col-md-6">
					<label for="caseSku">Date</label>
					<input className="form-control" id="caseSku" />
					<span class="input-group-addon">
						<span class="glyphicon glyphicon-time"></span>
					</span>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="pdtSname">Google Drive PO Folder</label>
					<input className="form-control" id="pdtSname" />
				</div>
				<div className="form-group col-md-6">
					<label for="copacker">Vendor</label>
					<select id="copacker" className="form-control">
						<option selected>Select Vendor</option>
						<option>Davidsons</option>
						<option>Nutra Science</option>
						<option>Liquid Nutra</option>
					</select>
				</div>
			</div>
			<div className="form-group">
				<Table />
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="cat">Deliver To Warehouse</label>
					<select id="cat" className="form-control">
						<option selected>Fulfillment Warehouse</option>
					</select>
				</div>
				<div className="form-group col-md-6">
					<label for="pdtSname">Quantity</label>
					<input className="form-control" id="pdtSname" />
				</div>
			</div>
			<div className="row justify-content-md-center">
				<button type="submit" className="btn blue-back mx-2">
					Save
				</button>
				<button type="submit" className="btn blue-back mx-2">
					Cancel
				</button>
			</div>
		</form>
	);
}

function Table() {
	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th scope="col">Item Details</th>
					<th scope="col">Quantity</th>
					<th scope="col">Warehouse to Deliver to</th>
					<th scope="col">Add Delivery Warehouse</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">
						<select id="cat" className="form-control">
							<option selected>Search or Select Product</option>
						</select>
					</th>
					<td>
						<input className="form-control" />
					</td>
					<td>
						<input className="form-control" />
					</td>
					<td>
						<input className="form-control" />
					</td>
				</tr>
				<tr>
					<th scope="row">
						<button type="submit" className="btn blue-back mx-2">
							Add Row
						</button>
					</th>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
}

export default NewOrder;
