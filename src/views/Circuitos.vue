<template>
  <v-container>
    <h3 class="text-center">CIRCUITOS</h3>

    <ListaCircuitos />
  </v-container>
</template>

<script>
import ListaCircuitos from "../components/ListaCircuitos.vue";

export default {
  name: "MeusCircuitos",
  components: {
    ListaCircuitos,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
