<template>
  <div>
    <v-app-bar
        app
        color="primary"
        dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/">
          <span class="white--text">Application</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <div class="my-2">
        <router-link to="/login">
        <v-btn small
        color="white">
          <span class="black--text">로그인</span>
        </v-btn>
        </router-link>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item v-for="(item, index) in items" v-bind:key="index" :to="{path:item.path}"
                       @click="drawer = !drawer">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "Header",
  data: () => ({
    drawer: false,
    items: [
      {path: "/", name: "home", title: "Home"},
      {path: "/users", name: "users", title: "Users"},
    ]
  }),
  methods: {
    logOut() {
      console.log("logout")
      this.$cookies.remove("COKES-TOKEN");
      this.$store.dispatch('logout')
      // this.$router.push({path:'/'})
    }
  },
  computed: {
    ...mapState(["CokesToken"])
  }
}
</script>
<style scoped>
a {
  text-decoration:none !important
}
</style>