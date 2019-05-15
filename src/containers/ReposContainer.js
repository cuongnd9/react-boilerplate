import { connect } from 'react-redux';
import { Repos } from '../components';
import { fetchReposAction } from '../actions';

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch => ({
  onFetchRepos: () => dispatch(fetchReposAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
