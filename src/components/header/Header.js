import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Header() {
	const active = { color: '#f7931e' };
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<NavLink class="navbar-brand" to="/">
				<img src={Logo} width="120" height="60" alt="" />
			</NavLink>
			<NavLink
				className="blue btn btn-outline-light"
				to="/products"
				activeStyle={active}
			>
				Items and Products
			</NavLink>
			{' | '}
			<NavLink
				className="blue btn btn-outline-light"
				to="/inventory"
				activeStyle={active}
			>
				Inventory Summary
			</NavLink>
			{' | '}
			<NavLink
				className="blue btn btn-outline-light"
				to="/contacts"
				activeStyle={active}
			>
				Contacts
			</NavLink>
			{' | '}
			<NavLink
				className="blue btn btn-outline-light"
				to="/warehouses"
				activeStyle={active}
			>
				Warehouses
			</NavLink>
			{' | '}
			<NavLink
				className="blue btn btn-outline-light"
				to="/purchase-orders"
				activeStyle={active}
			>
				Purchase Orders
			</NavLink>
			{' | '}
			<NavLink
				className="blue btn btn-outline-light"
				to="/transfers"
				activeStyle={active}
			>
				Transfers
			</NavLink>
		</nav>
	);
}

export default Header;
