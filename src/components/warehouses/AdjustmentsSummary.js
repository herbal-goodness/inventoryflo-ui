import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getInventoryAdjustments } from '../../services/warehousesService';
import DataGrid from '../shared/DataGrid';
import { PageHeader } from '../shared/StyledComponents';
import { adjustmentSummaryColumns } from './config';

const Wrapper = styled.section`
	width: 100%;
`;

const AdjustmentsSummary = () => {
	const [adjustments, setAdjustments] = useState([]);

	useEffect(() => {
		getInventoryAdjustments().then(
			({ data }) => {
				setAdjustments(data);
			},
			(error) => {
				console.error(error);
			},
		);
	});

	return (
		<Wrapper>
			<PageHeader>Item Summary</PageHeader>
			<DataGrid
				columns={adjustmentSummaryColumns}
				enableCellSelect
				rows={adjustments}
			/>
		</Wrapper>
	);
};

export default AdjustmentsSummary;
