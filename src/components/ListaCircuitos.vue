<template>
  <div class="circuitos">
    <!-- <ul>
      <li v-for="circuito of listaCircuitos" :key="circuito.name">
        <h2 @click="navigateToBloco(circuito.name)">{{ circuito.name }}</h2>
      </li>
    </ul> -->
    <v-card class="mx-auto" max-width="450" tile>
      <v-list nav dense>
        <v-subheader>Circuitos</v-subheader>
        <v-list-item-group v-model="listaCircuitos" color="primary">
          <v-list-item link v-for="(circuito, i) in listaCircuitos" :key="i">
            <v-list-item-content @click="navigateToBloco(circuito.name)">
              <v-list-item-title v-text="circuito.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ListaCircuitos",
  data() {
    return {
      listaCircuitos: [],
      urlCircuito: "bloco/",
    };
  },
  methods: {
    navigateToBloco: function (name) {
      this.$router.push("bloco/" + name);
    },
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.listaCircuitos = json;
      });
  },
};
</script>

<style scoped>
a {
  list-style: none;
  text-decoration: none;
  color: black;
}
</style>
