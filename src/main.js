import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCookies from "vue-cookies"

Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:8888"
Vue.prototype.$axios = axios;
Vue.$cookies.config("1d");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
