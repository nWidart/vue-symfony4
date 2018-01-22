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
  return request({
    url: '/api/user/me',
    method: 'get',
    params: { token }
  })
}
