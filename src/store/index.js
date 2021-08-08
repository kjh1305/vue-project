import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

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
    submitForm(context){
      context.commit('login_Token')
    },
    logout(context) {
      context.commit('logout_Token')
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
