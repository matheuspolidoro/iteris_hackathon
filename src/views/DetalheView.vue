<template>
  <v-container>
    <h1>This is a dynamic route</h1>
    <h2>The route param is: {{ this.$route.params.id }}</h2>
    <h3> {{blocoObject.name}} </h3>
  </v-container>
</template>

<script>
 
export default {
  name: "DetalheView",
  data: function () {
    return {
        prop: 'aaaaa',
        prop1: 'dsdsd',
        prop4: 'eopdkso',
        prop5: 'eopdks',

        blocoObject: {
            address: "Salvador - BA",
            description: "Considerado um dos mais antigos blocos de Salvador, o bloco Mudança do Garcia existe há 82 anos e sai de um dos circuitos oficiais do carnaval, o Circuito Osmar. A agremiação se destaca pelos protestos realizados pelos foliões durante o cortejo. Com faixas, cartazes e fantasias tratando de assuntos como política, educação e saúde os foliões saem pelas ruas do Campo Grande dançando, fazendo brincadeiras e gritando palavras de ordem.",
            name: "Mudança do Garcia",
            photo: "https://www.correio24horas.com.br/fileadmin/_processed_/2/d/csm_faixa_carnaval_de1dfb906e.jpg"
        }
    }
  },
  created: function () {
    console.log('bloco é: ' + this.blocoObject)
  }
};
</script>
