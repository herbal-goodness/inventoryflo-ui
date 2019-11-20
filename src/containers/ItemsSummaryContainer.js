import { connect } from 'react-redux';

import { getAllItems } from '../actions/itemsActions';
import ItemsSummary from '../components/items/ItemsSummary';
import { getItems } from '../selectors/itemsSelectors';

const mapStateToProps = state => ({
	items: getItems(state),
});

const mapDispatchToProps = dispatch => ({
	getItems: () => dispatch(getAllItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsSummary);
