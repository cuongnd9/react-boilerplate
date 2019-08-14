import request from 'utils/request';

export function fetchRepos() {
  return request('https://api.github.com/users/cuongw/repos');
}
