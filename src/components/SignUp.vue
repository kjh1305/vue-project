<template>
  <div class="container">
    <form class="form-signin" action="" v-on:submit.prevent="submitForm">
      <h2 class="form-signin-heading">Please sign up</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      <label for="inputName" class="sr-only">name</label>
      <input type="text" id="inputName" class="form-control" placeholder="Name" v-model="name" required>
      <button class="btn btn-lg btn-primary btn-block">Sign up</button>
    </form>
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header><h3>경고!</h3></template>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  name: "Signup",
  data: () => {
    return{
      email: '',
      password: '',
      name: '',
      showModal: false
    }
  },
  methods:{
    submitForm(){
      this.$axios.post('/users', {
        email: this.email,
        password: this.password,
        name: this.name
      }).then(res => {
        console.log(res.data)
        console.log(res.data.email)
        console.log(res.data.password)
        console.log(res.data.name)
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