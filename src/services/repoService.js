import axios from 'axios';

export function fetchRepo(name) {
  return axios.get(`https://api.github.com/repos/cuongw/${name}`);
}
