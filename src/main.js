import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueCookies from "vue-cookies"
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueCookies)
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:8888"
Vue.prototype.$axios = axios;
Vue.$cookies.config("1d");

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
