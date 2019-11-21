import { connect } from 'react-redux';

import { addNewWarehouse, setWarehouse } from '../../actions/warehousesActions';
import Warehouse from '../../components/warehouses/Warehouse';
import { getError, getLoading } from '../../selectors/warehousesSelectors';

const mapStateToProps = state => ({
	error: getError(state),
	loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	addWarehouse: (item) => dispatch(addNewWarehouse(item)),
	updateWarehouse: (item) => dispatch(setWarehouse(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Warehouse);
