import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

function PageNav({ links }) {
	return (
		<>
			<nav>
				{links.map(link => {
					return (
						<NavLink
							className="nav-item btn orange-back mx-2 my-2"
							to={link.path}
						>
							{link.text}
						</NavLink>
					);
				})}
			</nav>
			<Switch>
				{links.map(link => {
					return <Route exact path={link.path} />;
				})}
			</Switch>
		</>
	);
}

export default PageNav;
