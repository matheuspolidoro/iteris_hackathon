<template>
  <v-app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <TopBarComponent />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopBarComponent from "./components/shared/TopBarComponent";

export default {
  name: "App",
  components: {
    TopBarComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
* {
  font-family: "Ubuntu", sans-serif !important;
}
  #app {
    background-size: cover;
    background-color: rgb(238, 237, 220);
  }
.link-home {
  color: white !important;
  text-decoration: none;
}
</style>
