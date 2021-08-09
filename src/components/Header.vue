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
      <div class="my-2" v-if="CokesToken">
        <v-btn small
               color="white"
               @click="logout()">
          <span class="black--text">로그아웃</span>
        </v-btn>
      </div>
      <div class="my-2" v-else>
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
          >
            <v-list-item-title @click="drawer = !drawer">
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
import { mapState, mapActions } from "vuex"

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
    ...mapActions(["logout"])
  },
  computed: {
    ...mapState(["CokesToken"])
  }
}
</script>
<style scoped>
a {
  text-decoration: none !important
}
</style>