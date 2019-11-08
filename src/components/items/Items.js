import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import PageTabs from '../common/PageTabs';
import NewProduct from './NewProduct';
import ProductSummary from './ProductSummary';

const Items = ({
	match,
}) => {

	return (
		<Fragment>
			<PageTabs />
			<Switch>
				<Route exact path={`${match.url}/`} component={ProductSummary} />
				<Route exact path={`${match.url}/new`} component={NewProduct} />
			</Switch>
		</Fragment>
	);
};

Items.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Items;
