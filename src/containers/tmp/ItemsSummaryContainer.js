import { connect } from 'react-redux';

import { getAllItems, setItems } from '../../actions/itemsActions';
import ItemsSummary from '../../components/items/ItemsSummary';
import { getError, getItems, getLoading } from '../../selectors/itemsSelectors';

const mapStateToProps = state => ({
	error: getError(state),
	items: getItems(state),
	loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	getItems: () => dispatch(getAllItems()),
	updateItems: (items) => dispatch(setItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsSummary);
