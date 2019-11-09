import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

function FormInput({
	id,
	label,
	placeholder,
	type,
	col,
	inputType,
	value,
	disabled,
}) {
	console.log(id);
	console.log(value);
	return (
		<div className={'form-group' + (col ? ' ' + col : '')}>
			<label htmlFor={id}> {label} </label>
			<Field
				type={type ? type : 'text'}
				className={'form-control' + (inputType ? inputType : '')}
				name={id}
				placeholder={placeholder}
				value={value}
				disabled={disabled}
				component="input"
			/>
		</div>
	);
}

function Button({ label, type, style, onClick, name, value }) {
	return (
		<button
			type={type}
			className={'btn ' + style}
			onclick={onClick}
			name={name}
			value={value}
		>
			{label}
		</button>
	);
}

function RadioGroup({ radios, id }) {
	return (
		<div id={id}>
			{radios.map(radio => {
				let val = radio.value;
				let disp = radio.label;
				let checked = radio.checked;
				return (
					<div className="form-check form-check-inline" key={val}>
						<Field
							type="radio"
							className="form-check-input"
							name={id}
							value={val}
							checked={checked}
							component="input"
						/>
						<label>{disp}</label>
					</div>
				);
			})}
		</div>
	);
}

function FormButtons({ parent }) {
	return (
		<div className="row justify-content-md-center">
			<button type="submit" className="btn blue-back mx-2">
				Save and Submit
			</button>
			<button type="reset" className="btn blue-back mx-2">
				Clear
			</button>
			<Link className="btn blue-back mx-2" to={parent}>
				Cancel
			</Link>
		</div>
	);
}

function Select({ id, label, col, placeholder, options, selected }) {
	return (
		<div className={'form-group' + (col ? ' ' + col : '')}>
			<label htmlFor={id}>{label}</label>
			<Field
				component="select"
				name={id}
				className="form-control"
				value={selected ? selected : ''}
			>
				<option value="" disabled>
					{placeholder}
				</option>
				{options.map(option => {
					return (
						<option key={option} id={option} value={option}>
							{option}
						</option>
					);
				})}
			</Field>
		</div>
	);
}

function CheckGroup({ id, label, style, checks, selected }) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<div className={'form-group' + (style ? style : '')} id={id}>
				{checks.map(check => {
					return (
						<div className="form-check-inline" key={check.value}>
							<Field
								component="input"
								className="form-check-input"
								type="checkbox"
								id={check.value}
								name={check.value}
								checked={selected && selected.includes(check.value)}
							/>
							<label className="form-check-label" htmlFor={check.value}>
								{' '}
								{check.label}{' '}
							</label>
						</div>
					);
				})}
			</div>
		</>
	);
}

export { FormInput, Button, RadioGroup, FormButtons, Select, CheckGroup };
