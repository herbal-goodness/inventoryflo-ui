import { connect } from 'react-redux';

import { getAllItems } from '../actions/items.actions';
import ItemsSummary from '../components/items/ItemsSummary';
import { getItems } from '../selectors/items.selectors';

const mapStateToProps = state => ({
	items: getItems(state),
});

const mapDispatchToProps = dispatch => ({
	getItems: () => dispatch(getAllItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsSummary);
