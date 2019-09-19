import request from 'helpers/request';

export function fetch(name) {
  return request(`https://api.github.com/repos/cuongw/${name}`);
}
