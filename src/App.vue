<template>
  <v-app>
      <v-app-bar
          app
          color="primary"
          dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn>
          <router-link to="/login">
              로그인
          </router-link>
        </v-btn>

      </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item v-for="(item, index) in items" v-bind:key="index" :to="{path:item.path}">
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
        <router-view/>
    </v-main>
    <v-footer>
      copyright by
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    items: [
      {path: "/", name: "home", title: "Home"},
      {path: "/users", name: "users", title: "Users"},
    ]
  }),
};
</script>
