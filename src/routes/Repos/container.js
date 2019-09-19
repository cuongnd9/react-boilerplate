import { connect } from 'react-redux';
import { fetchAction } from 'models/repos/actions';
import Repos from './component';

const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = dispatch => ({
  onFetchRepos: () => dispatch(fetchAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repos);
