import request from 'utils/request';

export function fetchRepo(name) {
  return request(`https://api.github.com/repos/cuongw/${name}`);
}
