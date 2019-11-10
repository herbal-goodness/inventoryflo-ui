import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageWrapper } from '../shared/StyledComponents';
import PageTabs from '../shared/PageTabs';
import NewItem from './NewItem';
import ItemSummary from './ItemSummary';

const Items = ({ match }) => {
	const pageTabs = [
		{ name: 'Items Summary', path: `${match.url}` },
		{ name: 'New Item', path: `${match.url}/new-item` },
		// { name: 'New Raws or Packaging', path: `${match.url}/new-raw-packaging` },
	];

	return (
		<PageWrapper>
			<PageTabs tabs={pageTabs} />
			<Switch>
				<Route exact path={`${match.url}`} component={ItemSummary} />
				<Route exact path={`${match.url}/new-item`} component={NewItem} />
				<Route exact path={`${match.url}/:itemId`} component={NewItem} />
			</Switch>
		</PageWrapper>
	);
};

Items.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Items;
