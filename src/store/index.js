import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import VueCookies from "vue-cookies";
import router from "../router/index"

Vue.use(VueCookies)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CokesToken: false
  },
  mutations: {
    login_Token(state){
      state.CokesToken = true
    },
    logout_Token(state){
      state.CokesToken = false
    }
  },
  actions: {
    login(context){
      context.commit('login_Token')
    },
    logout(context) {
      VueCookies.remove("COKES-TOKEN");
      context.commit('logout_Token')
      router.push({path:'/'})
    }
  },
  getters:{
    getToken(state){
      return state.CokesToken
    }
  },
  modules: {
  },
  plugins:[
      createPersistedState()
  ]
})
