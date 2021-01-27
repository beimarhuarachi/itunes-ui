import { connect } from 'react-redux';
import { Header } from '../components/Header';

const mapStateToProps = (state) => ({
  appName: state.appInfo.appName,
})

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
