import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
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

const StyledLink = styled(LinkContainer)`
	width: 100%;

	:not(:last-of-type) {
		margin-bottom: 16px;
	}

	@media screen and (min-width: 992px) {
		min-width: 100px;
		margin-bottom: 0 !important;
		margin-left: 16px;
		width: unset;

		:first-of-type {
			margin-left: 32px;
		}
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
						<StyledLink exact to="/items" isActive={(match, location) => location.pathname.includes('/items')}>
							<Button>Items</Button>
						</StyledLink>
						<StyledLink exact to="/inventory-summary" isActive={(match, location) => location.pathname.includes('/inventory-summary')}>
							<Button>Inventory Summary</Button>
						</StyledLink>
						<StyledLink exact to="/contacts" isActive={(match, location) => location.pathname.includes('/contacts')}>
							<Button>Contacts</Button>
						</StyledLink>
						<StyledLink exact to="/warehouses" isActive={(match, location) => location.pathname.includes('/warehouses')}>
							<Button>Warehouses</Button>
						</StyledLink>
						<StyledLink exact to="/purchase-orders" isActive={(match, location) => location.pathname.includes('/purchase-orders')}>
							<Button>Purchase Orders</Button>
						</StyledLink>
						<StyledLink exact to="/transfers" isActive={(match, location) => location.pathname.includes('/transfers')}>
							<Button>Transfers</Button>
						</StyledLink>
					</StyledButtonToolbar>
				</StyledNav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
