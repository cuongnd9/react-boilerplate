import axios from 'axios';

export function fetchRepos() {
  return axios.get('https://api.github.com/users/cuongw/repos');
}
