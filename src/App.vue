<template>
  <v-app>
    <nav>
      <v-toolbar
          color="yellow"
          flat>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="sidebar" app hide-overlay>
          <v-list>
            <v-list-item v-for="(item, i) in menuItems" exact :key="i" :to="item.path">{{ item.title }}</v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar-title>
        <span class="font-weight-light">
          <router-link to="/">회원 관리 프로그램</router-link>
        </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn>logout
        </v-btn>
        <v-btn>
          <router-link to="/login">Login</router-link>
        </v-btn>

      </v-toolbar>
    </nav>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer>

    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    sidebar: false,
    menuItems: [
      {path: "/", name: "home", title: "Home"},
      {path: "/users", name: "users", title: "Users"},
    ]
  }),
};
</script>
