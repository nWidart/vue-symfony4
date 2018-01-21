import request from '../utils/request'

export function login(username, password) {
  return request({
    url: '/api/login_check',
    method: 'post',
    data: {
      'username': username,
      'password': password
    }
  })
}

export function getInfo(token) {
  console.log(token); return false;
  return request({
    url: '/api/user/me',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
