import React from 'react';

function NewProduct() {
	return (
		<form>
			<div className="form-row">
				<div className="form-group col-md-6" id="pdtType">
					<label for="pdtType">Product Type</label>
					<div id="pdtType">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" id="turnkey" />
							<label class="form-check-label" for="turnkey">
								Turnkey
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" id="composite" />
							<label class="form-check-label" for="composite">
								Composite Unit
							</label>
						</div>
					</div>
				</div>
				<div className="form-group col-md-6">
					<label for="imgUpload">Upload Image</label>
					<input type="file" className="form-control-file" id="imgUpload" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="unitSku">Unit SKU</label>
					<input className="form-control" id="unitSku" />
				</div>
				<div className="form-group col-md-6">
					<label for="caseSku">Case SKU</label>
					<input className="form-control" id="caseSku" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="pdtSname">Product Short Name</label>
					<input className="form-control" id="pdtSname" />
				</div>
				<div className="form-group col-md-6">
					<label for="pdtLname">Product Long Name</label>
					<input className="form-control" id="pdtLname" />
				</div>
			</div>
			<div className="form-group">
				<label for="pdtDesc">Product Description</label>
				<textarea className="form-control" id="pdtDesc" />
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="cat">Category</label>
					<select id="cat" className="form-control">
						<option selected>Select</option>
						<option>Tea</option>
						<option>Liquid</option>
						<option>Capsule</option>
						<option>Raw</option>
					</select>
				</div>
				<div className="form-group col-md-6">
					<label for="copacker">Copacker</label>
					<select id="copacker" className="form-control">
						<option selected>Select</option>
						<option>Davidsons</option>
						<option>Nutra Science</option>
						<option>Liquid Nutra</option>
					</select>
				</div>
			</div>
			<label for="cert"> Certification </label>
			<div className="form-group" id="cert">
				<div className="form-check-inline">
					<input className="form-check-input" type="checkbox" id="organic" />
					<label className="form-check-label" for="organic">
						Organic
					</label>
				</div>
				<div className="form-check-inline">
					<input className="form-check-input" type="checkbox" id="kosher" />
					<label className="form-check-label" for="kosher">
						Kosher
					</label>
				</div>
				<div className="form-check-inline">
					<input className="form-check-input" type="checkbox" id="other" />
					<label className="form-check-label" for="other">
						Other
					</label>
				</div>
			</div>
			<div className="row justify-content-md-center">
				<button type="submit" className="btn blue-back mx-2">
					Save and Submit
				</button>
				<button type="submit" className="btn blue-back mx-2">
					Clear
				</button>
				<button type="submit" className="btn blue-back mx-2">
					Cancel
				</button>
			</div>
		</form>
	);
}

export default NewProduct;
