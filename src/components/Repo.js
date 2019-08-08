import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

function Repo({ onFetchRepo, repo, match }) {
  useEffect(() => {
    onFetchRepo(match.params.name);
  }, [onFetchRepo, match.params.name]);

  return (
    <div className="container p-5">
      <h4 className="text-danger mb-3">{repo.name}</h4>
      {Object.keys(repo).length === 0 && <ClipLoader sizeUnit="px" size={45} color="#123abc" />}
      {Object.keys(repo).length > 0 && (
        <>
          <p className="text-primary">{repo.full_name}</p>
          <p className="text-secondary">{repo.description}</p>
          <p className="text-warning">{repo.language}</p>
        </>
      )}
    </div>
  );
}

Repo.defaultProps = {
  repo: {},
};

Repo.propTypes = {
  onFetchRepo: PropTypes.func.isRequired,
  repo: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Repo;
