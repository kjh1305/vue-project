<template>
  <b-navbar toggleable="sm" type="success" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand id="navbar-brand">BootstrapVue</b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/users">Users</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/signup">SignUp</router-link>
        </b-nav-item>
        <b-nav-item>
          <a href="#" v-on:click="logOut" v-if="CokesToken">Logout</a>
          <router-link to="/login" v-else>Login</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Header",
  methods:{
    logOut(){
      console.log("logout")
      this.$cookies.remove("COKES-TOKEN");
      this.$store.dispatch('logout')
      // this.$router.push({path:'/'})
    }
  },
  computed:{
    ...mapState(["CokesToken"])
  }
}
</script>

<style scoped>
#navbar-brand{
  margin-left: 10px;
}
</style>