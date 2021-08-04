<template>
  <div class="container">
    <form class="form-signin" action="" v-on:submit.prevent="submitForm">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block">Sign in</button>
    </form>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">로그인 실패</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  name: "Login",
  data: () => {
    return {
      email: '',
      password: '',
      showModal: false
    }
  },
  methods:{
    submitForm(){
      this.$axios.post('/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res.data)
        this.$store.dispatch('submitForm')
        this.$cookies.set("COKES-TOKEN", res.data)
        this.$router.push({path:'/'})
      }).catch(error => {
        console.log(error)
        this.showModal = true
      })
    }
  },
  components:{
    Modal
  }
}
</script>

<style scoped>
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>