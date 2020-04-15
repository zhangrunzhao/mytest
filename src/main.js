import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
