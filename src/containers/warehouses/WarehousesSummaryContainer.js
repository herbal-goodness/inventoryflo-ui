import { connect } from 'react-redux';

import { getAllWarehouses, setWarehouses } from '../../actions/warehousesActions';
import WarehousesSummary from '../../components/warehouses/WarehousesSummary';
import { getError, getWarehouses, getLoading } from '../../selectors/warehousesSelectors';

const mapStateToProps = state => ({
	error: getError(state),
	warehouses: getWarehouses(state),
	loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	getWarehouses: () => dispatch(getAllWarehouses()),
	updateWarehouses: (items) => dispatch(setWarehouses(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WarehousesSummary);
