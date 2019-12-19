import { connect } from 'react-redux';

import { addContact, setContact } from '../../actions/contactsActions';
import Contact from '../../components/contacts/Contact';
import { getError, getLoading } from '../../selectors/contactsSelectors';

const mapStateToProps = state => ({
	error: getError(state),
	loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	addContact: contact => dispatch(addContact(contact)),
	updateContact: contact => dispatch(setContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
