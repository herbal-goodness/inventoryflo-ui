import { connect } from 'react-redux';

import { getAllContacts, setContacts } from '../../actions/contactsActions';
import ContactsSummary from '../../components/contacts/ContactsSummary';
import { getError, getContacts, getLoading } from '../../selectors/contactsSelectors';

const mapStateToProps = state => ({
	error: getError(state),
	contacts: getContacts(state),
	loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	getContacts: () => dispatch(getAllContacts()),
	updateContacts: (items) => dispatch(setContacts(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsSummary);
