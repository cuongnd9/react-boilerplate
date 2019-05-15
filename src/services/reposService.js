import axios from 'axios';

export function* fetchRepos() {
  const response = yield axios.get('https://api.github.com/users/cuongw/repos');
  return response.data ? response.data: [];
};
