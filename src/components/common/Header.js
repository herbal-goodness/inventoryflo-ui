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
						<LinkContainer exact to="/items">
							<Button>Items</Button>
						</LinkContainer>
						<LinkContainer exact to="/inventory-summary">
							<Button>Inventory Summary</Button>
						</LinkContainer>
						<LinkContainer exact to="/contacts">
							<Button>Contacts</Button>
						</LinkContainer>
						<LinkContainer exact to="/warehouses">
							<Button>Warehouses</Button>
						</LinkContainer>
						<LinkContainer exact to="/purchase-orders">
							<Button>Purchase Orders</Button>
						</LinkContainer>
						<LinkContainer exact to="/transfers">
							<Button>Transfers</Button>
						</LinkContainer>
					</ButtonToolbar>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
