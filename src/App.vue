<template>
  <v-app>
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
.link-home {
  color: white !important;
  text-decoration: none;
}
</style>
