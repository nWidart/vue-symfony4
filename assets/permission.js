import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from './utils/auth'

const whiteList = ['/login'] // Do not redirect the whitelist
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // Pull user information
          next()
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('Verification failed, please log in again');
            next({ path: '/login' })
          })
        })
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login');
    }
  }
});

router.afterEach(() => {

})
