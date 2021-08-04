import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CokesToken: 'false'
  },
  mutations: {
    SET_TOKEN(state, token){
      state.CokesToken = token
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
  modules: {
  }
})
