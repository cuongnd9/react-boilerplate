import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

function Repos({ onFetchRepos, repos }) {
  useEffect(() => {
    if (!repos.length) {
      onFetchRepos();
    }
  });

  return (
    <div className="container p-5">
      <h4 className="text-danger mb-3">My Repos</h4>
      {repos.length === 0 && (
        <ClipLoader sizeUnit={'px'} size={45} color={'#123abc'} />
      )}
      {repos.length !== 0 &&
        repos.map((repo, index) => (
          <div className="d-flex border-bottom mb-3" key={index}>
            <div className="w-100">
              <a className="text-primary h4" href={repo.html_url}>
                <u>{repo.name}</u>
              </a>
              <p className="text-dark">{repo.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

Repos.propTypes = {
  onFetchRepos: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default Repos;
