import request from 'helpers/request';

export function fetch() {
  return request('https://api.github.com/users/cuongw/repos');
}
