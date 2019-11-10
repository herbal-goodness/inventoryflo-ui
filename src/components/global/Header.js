import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeStyles = {
	color: '#FD9819',
	fontWeight: 'bold',
	textDecoration: 'underline',
};

const LogoutButton = styled(Button)`
	color: white;
	font-weight: 200;

	:hover {
		color: white;
		text-decoration: underline;
	}
`;

const StyledLink = styled(NavLink)`
	align-items: center;
	color: white;
	display: flex;
	text-align: center;
	width: 100%;

	:hover {
		color: white;
	}

	:not(:last-of-type) {
		margin-bottom: 16px;
	}

	@media screen and (min-width: 992px) {
		margin-bottom: 0 !important;
		margin-left: 24px;
		width: unset;
	}
`;

const StyledNav = styled(Nav)`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;

	@media (min-width: 992px) {
		flex-wrap: nowrap;
		padding: 0 16px;
	}
`;

const Header = ({ loggedIn, logOut }) => {

	return (
		<Navbar bg="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand><img src="/header-icon.png" alt="Inventory Flo Home" /></Navbar.Brand>
			</LinkContainer>
			{ loggedIn === true && (
				<Fragment>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<StyledNav>
							<StyledLink activeStyle={activeStyles} to="/inventory-summary">Inventory Summary</StyledLink>
							<StyledLink activeStyle={activeStyles} to="/items">Items</StyledLink>
							<StyledLink activeStyle={activeStyles} to="/contacts">Contacts</StyledLink>
							<StyledLink activeStyle={activeStyles} to="/warehouses">Warehouses</StyledLink>
							<StyledLink activeStyle={activeStyles} to="/purchase-orders">Purchase Orders</StyledLink>
							<StyledLink activeStyle={activeStyles} to="/transfers">Transfers</StyledLink>
						</StyledNav>
						<LogoutButton onClick={logOut} variant="text">log out</LogoutButton>
					</Navbar.Collapse>
				</Fragment>
			)}
		</Navbar>
	);
};

Header.propTypes = {
	loggedIn: PropTypes.bool,
	logOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
	loggedIn: false,
};

export default Header;
