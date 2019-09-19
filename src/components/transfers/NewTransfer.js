import React from 'react';

function NewOrder() {
	return (
		<form>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label for='pdtSname'>From Warehouse</label>
					<select id='copacker' className='form-control'>
						<option selected>Select Warehouse</option>
						<option>Davidsons</option>
						<option>EFulfillment</option>
					</select>
				</div>
				<div className='form-group col-md-6'>
					<label for='copacker'>To Warehouse</label>
					<select id='copacker' className='form-control'>
						<option selected>Select Warehouse</option>
						<option>Davidsons</option>
						<option>E Fulfillment</option>
					</select>
				</div>
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label for='unitSku'>Date</label>
					<input className='form-control' id='unitSku' />
				</div>
				<div className='form-group col-md-6'>
					<label for='caseSku'>Shipment #</label>
					<input className='form-control' id='caseSku' />
				</div>
			</div>
			<div className='form-group col-md-6'>
				<label for='imgUpload'>Upload Packing Slip</label>
				<input type='file' className='form-control-file' id='imgUpload' />
			</div>
			<div className='form-group'>
				<Table />
			</div>
			<div className='form-row'>
				<div className='form-group col-md-12'>
					<label for='pdtSname'>Inventory Note</label>
					<input className='form-control' id='pdtSname' />
				</div>
			</div>
			<div className='row justify-content-md-center'>
				<button type='submit' className='btn blue-back mx-2'>
					Save
				</button>
				<button type='submit' className='btn blue-back mx-2'>
					Cancel
				</button>
			</div>
		</form>
	);
}

function Table() {
	return (
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th scope='col'>Item Details</th>
					<th scope='col'>Quantity Packed</th>
					<th scope='col'>Quantity Delivered</th>
					<th scope='col'>Shipment Number</th>
					<th scope='col'>Status</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope='row'>
						<select id='cat' className='form-control'>
							<option selected>Search or Select Product</option>
						</select>
					</th>
					<td>
						<input className='form-control' />
					</td>
					<td>
						<input className='form-control' />
					</td>
					<td>
						<input className='form-control' />
					</td>
					<td>
						<input className='form-control' />
					</td>
				</tr>
				<tr>
					<th scope='row'>
						<button type='submit' className='btn blue-back mx-2'>
							Add Row
						</button>
					</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
}

export default NewOrder;
