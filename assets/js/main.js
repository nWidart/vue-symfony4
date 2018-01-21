import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
