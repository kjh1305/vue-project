<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-alert
            v-bind:value="isSuccess"
            type="success">
          로그인 성공
        </v-alert>
        <v-alert
            v-bind:value="isError"
            type="error">
          로그인 실패 ID와 PW를 확인해주세요
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                  v-model="email"
              ></v-text-field>
              <v-text-field
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitForm">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
<!--    <Modal v-if="showModal" @close="showModal = false">-->
<!--      <h3 slot="header">로그인 실패</h3>-->
<!--    </Modal>-->
  </v-container>
</template>

<script>
// import Modal from './common/Modal'

export default {
  name: "Login",
  data: () => {
    return {
      email: '',
      password: '',
      showModal: false,
      isSuccess: false,
      isError: false
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
        this.isSuccess = true
        // this.$router.push({path:'/'})
      }).catch(error => {
        console.log(error)
        // this.showModal = true
        this.isError = true
      })
    }
  },
  components:{
    // Modal
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