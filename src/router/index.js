import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from "../components/SignUp";
import Users from "../components/Users";
import Login from "../components/Login";
import VueCookies from "vue-cookies";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { unauthorized : true }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { unauthorized : true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { unauthorized : true }
  },

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {

  // if(VueCookies.get('token')===null && VueCookies.get('refresh_token') !== null){
  //   await refreshToken();
  // }

  if (to.matched.some(record => record.meta.unauthorized) || VueCookies.get('COKES-TOKEN')){
    return next();
  }

  alert('로그인 해주세요');
  return next('/login');
})


export default router
