import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
	border-radius: 4px;
	box-shadow: 8px 8px 32px 0px rgba(0,0,0,0.75);
	display: flex;
	flex-wrap: nowrap;
	height: 100%;
	margin: 24px auto;
	max-width: 720px;
	padding: 36px 24px;
	width: 100%;
`;

const Name = styled.div`
	align-items: center;
	border-right: 1px solid black;
	display: flex;
	flex: 0 1 240px;
	font-size: 18px;
	font-weight: 600;
	padding-right: 18px;
`;

const Details = styled.div`
	flex-grow: 1;
	padding-left: 18px;

	p {
		margin: 0;
	}
`;

const WarehouseCard = ({
	address,
	email,
	name,
	phone,
}) => {
	const {
		city,
		country,
		line1,
		line2,
		postal,
		state,
	} = address;

	return (
		<Card>
			<Name>{name}</Name>
			<Details>
				<p>{line1}</p>
				<p>{line2}</p>
				<p>{`${city}, ${state} ${postal}`}</p>
				<p>{country}</p>
				<p>{phone}</p>
				<p>{email}</p>
			</Details>
		</Card>
	);
};

WarehouseCard.propTypes = {
	address: PropTypes.objectOf({
		line1: PropTypes.string,
		line2: PropTypes.string,
		city: PropTypes.string,
		country: PropTypes.string,
		postal: PropTypes.string,
		state: PropTypes.string,
	}),
	email: PropTypes.string,
	name: PropTypes.string,
	phone: PropTypes.string,
};

WarehouseCard.defaultProps = {
	address: {},
	email: '',
	name: '',
	phone: '',
};

export default WarehouseCard;
