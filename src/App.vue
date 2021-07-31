<template>
  <div id="app">
    <div id="nav">
      <Header/>
    </div>
    <router-view/>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  fixed : top;
  padding-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #737373;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
