<template>
  <div class="Circuitos">
    <h2>Circuitos</h2>
    <ul>
      <li v-for="circuitos of listaCircuitos" :key="circuitos.name">
        <router-link :to="urlCircuito">
          <h2>{{ circuitos.name }}</h2>
        </router-link>
      </li>
    </ul>
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
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json")
      .then((response) => response.json())
      .then((json) => {
        this.listaCircuitos = json;
        this.urlCircuito = this.urlCircuito + json.name;
        console.log("Resposta API: ", json);
      });
  },
};
</script>

<style scoped></style>
