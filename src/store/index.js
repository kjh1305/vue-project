import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import VueCookies from "vue-cookies";
import router from "../router/index"
import axios from "axios";

Vue.use(VueCookies)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CokesToken: false,
    drawer: false,
    items: [
      {path: "/", name: "home", title: "Home"},
      {path: "/users", name: "users", title: "Users"},
    ],
    userListHeaders: [
      { text: 'Id', value: 'id' },
      { text: 'email', value: 'email' },
      { text: 'password', value: 'password' },
      { text: 'name', value: 'name'},
      { text: 'det', value: 'det' },
    ],
    userList: [],
    userListPageList:[]
  },
  mutations: {
    user_List(state, list){
      state.userList = list
    },
    user_Page(state, page){
      state.userListPageList = page
    },
    user_Page_Click(state, list){
      state.userList = list
    },
    login_Token(state){
      state.CokesToken = true
    },
    logout_Token(state){
      state.CokesToken = false
    }
  },
  actions: {
    userGetList(context){
      axios.get('/users?page=1')
          .then(res => {
            context.commit('user_List', res.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    userGetPage(context){
      axios.get('/users/page?page=1')
          .then(res => {
            context.commit('user_Page', res.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    userPageClick(context, pageNum){
      axios.get('/users?page='+pageNum)
          .then(res =>{
            context.commit('user_Page_Click', res.data, pageNum)
          })
          .catch(error => {
            console.log(error)
          })
    },
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
