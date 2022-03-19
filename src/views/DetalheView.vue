<template>
  <v-container>
    <h1>This is a dynamic route</h1>
    <h2>The route param is: {{ this.$route.params.id }}</h2>
  </v-container>
</template>

<script>
export default {
  name: "DetalheView",
};
</script>
