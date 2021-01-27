import { connect } from 'react-redux';
import { SearchForm } from '../components/SearchForm';
import { searchItunesItems } from '../state/actions/itunesItems.action';

const mapStateToProps = ({ }) => ({});

const mapDispatchToProps = { onSubmit: searchItunesItems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
