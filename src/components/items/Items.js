import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PageTabs from '../shared/PageTabs';
import NewProduct from './NewProduct';
import ProductSummary from './ProductSummary';

const Wrapper = styled.section`
	padding: 0 16px;
`;

const Items = ({
	match,
}) => {
	const pageTabs = [
		{ name: 'Product Summary', path: `${match.url}` },
		{ name: 'New Product', path: `${match.url}/new-product` },
		{ name: 'New Raws or Packaging', path: `${match.url}/new-raw-packaging` },
	];

	return (
		<Wrapper>
			<PageTabs tabs={pageTabs} />
			<Switch>
				<Route exact path={`${match.url}`} component={ProductSummary} />
				<Route exact path={`${match.url}/new-product`} component={NewProduct} />
			</Switch>
		</Wrapper>
	);
};

Items.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Items;
