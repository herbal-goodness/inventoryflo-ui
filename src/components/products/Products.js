import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Summary from './ProductSummary';
import NewProduct from './NewProduct';

function Products() {
	return (
		<>
			<nav>
				<NavLink className="nav-item btn orange-back" to="/products">
					Products Summary
				</NavLink>
				{'    '}
				<NavLink className="nav-item btn orange-back" to="/products/new">
					New Product
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/products" component={Summary} />
				<Route exact path="/products/new" component={NewProduct} />
			</Switch>
		</>
	);
}

export default Products;
