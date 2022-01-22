<template>
  <div>
    <LandingPage />
    <!-- <div class="background">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>-->
  </div>
</template>
<script>
import LandingPage from "@/views/LandingPage.vue";
export default {
  components: {
    LandingPage,
  },
};
</script>
<style>
:root {
  --primary-background-color: #2a324b;
  --primary-background-color-opacity: 0.8;
  --primary-blue-color: #4bb3fd;
  --primary-green-color: #62ffa1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.background {
  /* background-color: var(--primary-background-color); */
  /* opacity: var(--primary-background-color-opacity); */
  padding: 0;
  margin: 0;
  z-index: 0;
  /* background-image: ; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
