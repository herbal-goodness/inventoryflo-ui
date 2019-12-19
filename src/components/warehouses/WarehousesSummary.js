import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import mockWarehouses from '../../mocks/Warehouses';
import { getWarehouses } from '../../services/warehousesService';
import { PageHeader } from '../shared/StyledComponents';
import WarehouseCard from './WarehouseCard';

const Wrapper = styled.section`

	width: 100%;
`;

const WarehousesSummary = () => {
	const [warehouses, setWarehouses] = useState([]);

	useEffect(() => {
		getWarehouses().then(
			({ data }) => {
				setWarehouses(data);
			},
			(error) => {
				console.error(error);

				setWarehouses(mockWarehouses);
			}
		);
	}, []);

	return (
		<Wrapper>
			<PageHeader>Warehouses Summary</PageHeader>
			{ warehouses && (
				warehouses.map(warehouse => (
					<WarehouseCard
						address={warehouse.address}
						email={warehouse.email}
						key={`warehouse-${warehouse.name}`}
						name={warehouse.name}
						phone={warehouse.phone}
					/>
				))
			)}
		</Wrapper>
	);
};

export default WarehousesSummary;
