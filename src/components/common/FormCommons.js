import React from 'react';
import { Link } from 'react-router-dom';

function FormInput({
	id,
	label,
	placeholder,
	type,
	onChange,
	style,
	inputType,
	value,
	disabled,
}) {
	return (
		<div className={'form-group' + (style ? style : '')}>
			<label htmlFor={id}> {label} </label>
			<input
				type={type}
				className={'form-control' + (inputType ? inputType : '')}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				disabled={disabled}
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
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name={id}
							id={val}
							value={val}
							checked={checked}
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

function Select({ id, label, style, placeholder, options, selected }) {
	return (
		<div className={'form-group' + (style ? style : '')}>
			<label htmlFor={id}>{label}</label>
			<select id={id} className="form-control">
				<option value="" disabled selected={!selected}>
					{placeholder}
				</option>
				{options.map(option => {
					return (
						<option id={option} value={option} selected={selected == option}>
							{option}
						</option>
					);
				})}
			</select>
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
						<div className="form-check-inline">
							<input
								className="form-check-input"
								type="checkbox"
								id={check.value}
								value={check.value}
								name={id}
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
