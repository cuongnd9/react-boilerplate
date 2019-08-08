import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

function Repos({ onFetchRepos, repos }) {
  useEffect(() => {
    onFetchRepos();
  }, [onFetchRepos]);

  return (
    <div className="container p-5">
      <h4 className="text-danger mb-3">My Repos</h4>
      {repos.length === 0 && <ClipLoader sizeUnit="px" size={45} color="#123abc" />}
      {repos.length !== 0 &&
        repos.map(repo => (
          <div className="d-flex border-bottom mb-3" key={repo.id}>
            <div className="w-100">
              <Link className="text-primary h4" to={`/${repo.name}`}>
                <u>{repo.name}</u>
              </Link>
              <p className="text-dark">{repo.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

Repos.defaultProps = {
  repos: [],
};

Repos.propTypes = {
  onFetchRepos: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default Repos;
