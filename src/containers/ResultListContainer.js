import { connect } from 'react-redux';
import { ResultsList } from '../components/ResultsList';

const mapStateToProps = ({ itunesItems }) => ({
  itunesItems,
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsList);
