import { connect } from 'react-redux';

import { addNewItem, setItem } from '../../actions/itemsActions';
import Item from '../../components/items/Item';
import { getError, getLoading } from '../../selectors/itemsSelectors';

const mapStateToProps = state => ({
	error: getError(state),
	loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	addItem: (item) => dispatch(addNewItem(item)),
	updateItem: (item) => dispatch(setItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
