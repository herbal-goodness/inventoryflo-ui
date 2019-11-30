import PropTypes from 'prop-types';
import React from 'react';
import { Menu } from 'react-data-grid-addons';
import styled from 'styled-components';

const { ContextMenu, MenuItem } = Menu;

const StyledContextMenu = styled(ContextMenu)`
	min-width: 160px;
  padding: 8px 0;
  font-size: 16px;
  color: #373a3c;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  outline: none;
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms ease !important;

	.react-contextmenu-item {
		padding: 4px 16px;

		:hover {
			background-color: #20a0ff;
			border-color: #20a0ff;
			color: #fff;
			text-decoration: none;
		}

		:not(:last-of-type) {
			margin-bottom: 1px solid black;
		}
	}
`;

const DataGridContextMenu = ({
	id,
	idx,
	rowIdx,
	onRowDelete,
	onRowEdit
}) => {
	return (
		<StyledContextMenu id={id}>
			<MenuItem data={{ rowIdx, idx }} onClick={onRowEdit}>
				Edit Item
			</MenuItem>
			<MenuItem data={{ rowIdx, idx }} onClick={onRowDelete}>
				Delete Item
			</MenuItem>
		</StyledContextMenu>
	);
};

DataGridContextMenu.propTypes = {
	id: PropTypes.string.isRequired,
	idx: PropTypes.number,
	rowIdx: PropTypes.number,
	onRowDelete: PropTypes.func.isRequired,
	onRowEdit: PropTypes.func.isRequired,
};

export default DataGridContextMenu;
