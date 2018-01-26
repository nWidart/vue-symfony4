import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'

import './styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'

import './icons'
import './permission'

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
