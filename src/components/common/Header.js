import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

	return (
		<Navbar bg="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand>Inventory Flo</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<ButtonToolbar>
						<LinkContainer exact to="/items" isActive={(match, location) => location.pathname.includes('/items')}>
							<Button>Items</Button>
						</LinkContainer>
						<LinkContainer exact to="/inventory-summary" isActive={(match, location) => location.pathname.includes('/inventory-summary')}>
							<Button>Inventory Summary</Button>
						</LinkContainer>
						<LinkContainer exact to="/contacts" isActive={(match, location) => location.pathname.includes('/contacts')}>
							<Button>Contacts</Button>
						</LinkContainer>
						<LinkContainer exact to="/warehouses" isActive={(match, location) => location.pathname.includes('/warehouses')}>
							<Button>Warehouses</Button>
						</LinkContainer>
						<LinkContainer exact to="/purchase-orders" isActive={(match, location) => location.pathname.includes('/purchase-orders')}>
							<Button>Purchase Orders</Button>
						</LinkContainer>
						<LinkContainer exact to="/transfers" isActive={(match, location) => location.pathname.includes('/transfers')}>
							<Button>Transfers</Button>
						</LinkContainer>
					</ButtonToolbar>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
