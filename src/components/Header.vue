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
          <a href="#" v-if="CokesToken" v-on:click="logOut">Logout</a>
          <router-link to="/login" v-else>Login</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: "Header",
  data:function () {
    return {
      CokesToken : ''
    }
  },
  methods:{
    logOut(){
      console.log("logout")
      this.$cookies.remove("COKES-TOKEN");
      this.CokesToken = false
      this.$router.push({path:'/'})
    }
  },
  created() {
    if(this.$cookies.isKey("COKES-TOKEN")){
      this.CokesToken = true
    }else{
      this.CokesToken = false
    }
  },
}
</script>

<style scoped>
#navbar-brand{
  margin-left: 10px;
}
</style>