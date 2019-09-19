import { connect } from 'react-redux';
import { fetchAction, clearAction } from 'models/repo/actions';
import RepoDetail from './component';

const mapStateToProps = state => ({
  repo: state.repo,
});

const mapDispatchToProps = dispatch => ({
  onFetchRepo: name => dispatch(fetchAction(name)),
  onClearRepo: () => dispatch(clearAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoDetail);
