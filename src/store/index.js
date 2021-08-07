import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CokesToken: localStorage.getItem("CokesToken")
  },
  mutations: {
    SET_TOKEN(state, token){
      state.CokesToken = localStorage.setItem('CokesToken', token)
    }
  },
  actions: {
    submitForm(context){
      context.commit('SET_TOKEN', 'true')
    },
    logout(context){
      context.commit('SET_TOKEN', 'false')
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
