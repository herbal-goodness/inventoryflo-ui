import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledButtonToolbar = styled(ButtonToolbar)`
	display: flex;
	flex-wrap: wrap;
	padding: 16px;

	@media (min-width: 992px) {
		flex-wrap: nowrap;
		padding: 0 16px;
		width: 100%;
	}
`;

const activeStyles = {
	color: '#FD9819',
	'font-weight': 'bold',
	'text-decoration': 'underline',
};

const StyledLink = styled(NavLink)`
	color: white;
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
	width: 100%;
`;

const Header = () => {

	return (
		<Navbar bg="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand><img src="/header-icon.png" alt="Inventory Flo Home" /></Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<StyledNav>
					<StyledButtonToolbar>
						<StyledLink activeStyle={activeStyles} to="/items">Items</StyledLink>
						<StyledLink activeStyle={activeStyles} to="/inventory-summary">Inventory Summary</StyledLink>
						<StyledLink activeStyle={activeStyles} to="/contacts">Contacts</StyledLink>
						<StyledLink activeStyle={activeStyles} to="/warehouses">Warehouses</StyledLink>
						<StyledLink activeStyle={activeStyles} to="/purchase-orders">Purchase Orders</StyledLink>
						<StyledLink activeStyle={activeStyles} to="/transfers">Transfers</StyledLink>
					</StyledButtonToolbar>
				</StyledNav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
