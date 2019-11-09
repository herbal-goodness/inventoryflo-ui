import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const StyledButtonToolbar = styled(ButtonToolbar)`
	display: flex;
	flex-wrap: wrap;
	padding: 16px;
	width: 100%;

	@media (min-width: 400px) {
		flex-wrap: nowrap;
		justify-content: center;
		padding: 32px 16px;
	}
`;

const StyledLink = styled(LinkContainer)`
	width: 100%;

	:not(:last-of-type) {
		margin-bottom: 16px;
	}

	@media screen and (min-width: 400px) {
		min-width: 100px;
		margin-bottom: 0 !important;
		margin-left: 16px;
		width: unset;

		:first-of-type {
			margin-left: 32px;
		}
	}
`;

const PageTabs = ({ tabs }) => {
	return (
		<StyledButtonToolbar>
			{tabs.map((tab) => (
				<StyledLink
					to={tab.path}
					key={`tab-${tab.name}`}
					isActive={(match, location) => location.pathname === tab.path}
				>
					<Button>{tab.name}</Button>
				</StyledLink>
			))}
		</StyledButtonToolbar>
	);
};

PageTabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		path: PropTypes.string
	}))
};


export default PageTabs;
