import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContactsSummaryContainer from '../../containers/contacts/ContactsSummaryContainer';
import { PageWrapper } from '../shared/StyledComponents';
import PageTabs from '../shared/PageTabs';
import Contact from './Contact';

const Contacts = ({ match }) => {
	const pageTabs = [
		{ name: 'Contacts Summary', path: `${match.url}` },
		{ name: 'New Contact', path: `${match.url}/new` },
	];

	return (
		<PageWrapper>
			<PageTabs tabs={pageTabs} />
			<Switch>
				<Route exact path={`${match.url}`} component={ContactsSummaryContainer} />
				<Route exact path={`${match.url}/new`} component={Contact} />
				<Route exact path={`${match.url}/:id`} component={Contact} />
			</Switch>
		</PageWrapper>
	);
};

Contacts.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Contacts;
