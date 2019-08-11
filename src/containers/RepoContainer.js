import { connect } from 'react-redux';
import { Repo } from '../components';
import { fetchRepoAction, clearRepoAction } from '../actions';

const mapStateToProps = state => ({
  repo: state.repo,
});

const mapDispatchToProps = dispatch => ({
  onFetchRepo: name => dispatch(fetchRepoAction(name)),
  onClearRepo: () => dispatch(clearRepoAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repo);
