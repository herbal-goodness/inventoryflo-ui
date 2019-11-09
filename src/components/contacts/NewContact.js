import React from 'react';

function NewContact() {
	return (
		<form>
			<div className="form-row">
				<div className="form-group col-md-12" id="pdtType">
					<label htmlFor="pdtType">Contact Type</label>
					<div id="pdtType">
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" id="turnkey" />
							<label className="form-check-label" htmlFor="turnkey">
								Supplier
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" id="composite" />
							<label className="form-check-label" htmlFor="composite">
								Contact Manufacturer
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" id="composite" />
							<label className="form-check-label" htmlFor="composite">
								Other
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="form-row row">
				<label htmlFor="abc" className="col-md-2">
					Primary Contact
				</label>
				<div className="form-group row col-md-10" id="abc">
					<select id="cat" className="form-control col-md-2">
						<option selected>Mr.</option>
						<option>Mrs.</option>
						<option>Ms.</option>
						<option>--</option>
					</select>
					<input
						className="form-control col-md-5"
						id="unitSku"
						placeholder="First Name"
					/>
					<input
						className="form-control col-md-5"
						id="caseSku"
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="pdtSname">Company Name</label>
					<input className="form-control" id="pdtSname" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="pdtLname">Contact Email</label>
					<input className="form-control" id="pdtLname" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="pdtSname">Contact Phone</label>
					<input className="form-control" id="pdtSname" placeholder="Work" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="pdtLname"> &nbsp; </label>
					<input className="form-control" id="pdtLname" placeholder="Mobile" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="pdtSname">Website</label>
					<input className="form-control" id="pdtSname" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="pdtLname">Contact Address</label>
					<input className="form-control" id="pdtLname" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="pdtSname">Country</label>
					<input className="form-control" id="pdtSname" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="pdtLname">State</label>
					<input className="form-control" id="pdtLname" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="pdtSname">Lead Time (Days)</label>
					<input className="form-control" id="pdtSname" />
				</div>
			</div>
			<b>Add Payment Details</b>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="pdtSname">Bank Name</label>
					<input className="form-control" id="pdtSname" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="pdtLname">Account Number</label>
					<input className="form-control" id="pdtLname" />
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

export default NewContact;
