import React from 'react';

function NewWarehouse() {
	return (
		<>
			<form>
				<div className="form-row">
					<div className="form-group col-md-12">
						<label for="unitSku">Warehouse Name</label>
						<input className="form-control" id="unitSku" />
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label for="pdtSname">Address Line 1</label>
						<input className="form-control" id="pdtSname" />
					</div>
					<div className="form-group col-md-6">
						<label for="pdtSname">Address Line 2</label>
						<input className="form-control" id="pdtSname" />
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label for="pdtSname">City</label>
						<input className="form-control" id="pdtSname" />
					</div>
					<div className="form-group col-md-6">
						<label for="pdtSname">State</label>
						<input className="form-control" id="pdtSname" />
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label for="pdtSname">Country</label>
						<input className="form-control" id="pdtSname" />
					</div>
					<div className="form-group col-md-6">
						<label for="pdtSname">Zip Code</label>
						<input className="form-control" id="pdtSname" />
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label for="pdtSname">Phone</label>
						<input className="form-control" id="pdtSname" />
					</div>
					<div className="form-group col-md-6">
						<label for="pdtSname">Email</label>
						<input className="form-control" id="pdtSname" />
					</div>
				</div>
			</form>
			<div className="row justify-content-md-center">
				<button type="submit" className="btn blue-back mx-2">
					Save
				</button>
				<button type="submit" className="btn blue-back mx-2">
					Cancel
				</button>
			</div>
		</>
	);
}

export default NewWarehouse;
