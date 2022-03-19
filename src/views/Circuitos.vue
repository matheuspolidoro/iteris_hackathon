<template>
  <v-container>
    <h2>Circuitos</h2>
    <ListaCircuitos/>
  </v-container>
</template>

<script>
import ListaCircuitos from '../components/ListaCircuitos.vue';

export default {
  name: 'MeusCircuitos',
  components: {
    ListaCircuitos
  },
  data() {
    return {
    }
  },
}
</script>
