import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ItemContainer from '../../containers/items/ItemContainer';
import ItemsSummaryContainer from '../../containers/items/ItemsSummaryContainer';
import { PageWrapper } from '../shared/StyledComponents';
import PageTabs from '../shared/PageTabs';

const Items = ({ match }) => {
	const pageTabs = [
		{ name: 'Items Summary', path: `${match.url}` },
		{ name: 'New Item', path: `${match.url}/new` },
	];

	return (
		<PageWrapper>
			<PageTabs tabs={pageTabs} />
			<Switch>
				<Route exact path={`${match.url}`} component={ItemsSummaryContainer} />
				<Route exact path={`${match.url}/new`} component={ItemContainer} />
				<Route exact path={`${match.url}/:sku`} component={ItemContainer} />
			</Switch>
		</PageWrapper>
	);
};

Items.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Items;
