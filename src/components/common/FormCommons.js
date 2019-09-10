import React from 'react';

function FormInput({ inputId, label }) {
	return (
		<>
			<label for={inputId}> {label} </label>
			<input className="form-control" id={inputId} />
		</>
	);
}

export { FormInput };
