<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="nav-bar">
    <Navbar />
    
  </div>
  <hr />
  <router-view/>
  
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(19, 18, 18);
}
#nav-var {
  background-color: rgb(17, 16, 16);
}
#hr{
  background-color: rgb(20, 20, 20);
  border:150px
}
</style>
