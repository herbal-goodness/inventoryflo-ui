import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ItemsSummaryContainer from '../../containers/ItemsSummaryContainer';
import { PageWrapper } from '../shared/StyledComponents';
import PageTabs from '../shared/PageTabs';
import NewItem from './NewItem';

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
				<Route exact path={`${match.url}/new`} component={NewItem} />
				<Route exact path={`${match.url}/:itemId`} component={NewItem} />
			</Switch>
		</PageWrapper>
	);
};

Items.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Items;
