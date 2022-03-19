<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="680px">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" v-bind:src="photoUrl"></v-img>

      <v-card-title>{{ blocoObject.name }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          <h2>{{ this.$route.params.id }}</h2>
        </div>

        <div>
          {{ description }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Horários</v-card-title>

      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <v-chip>7:30PM - Rua Uruguay </v-chip>

          <v-chip>8:00PM - Rua Corredor da Vitória </v-chip>

          <v-chip>9:00PM - Rua Getúlio Vargas </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <a href="http://meet.google.com/dmv-bozw-npq" target="_blank">
          <v-btn color="deep-purple lighten-2" text>Entrar na live </v-btn>
        </a>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto my-12" max-width="680px">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="400px"
            id="gmap_canvas"
            :src="bloco_map_url"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "DetalheView",
  data: function () {
    return {
      bloco_map_url: "",
      blocoObject: {},
      photoUrl: "",
      description: "",
    };
  },
  created: function () {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json")
      .then((response) => response.json())
      .then((json) => {
        console.log("route id: ", this.$route.params.id);

        json.forEach((el) => {
          if (el.name === this.$route.params.id) {
            this.blocoObject = el;
            this.photoUrl = el.photo;
            this.description = el.description;
          }
        });

        this.blocoObject = this.bloco_map_url =
          "https://maps.google.com/maps?q=" +
          this.blocoObject.address +
          " bloco " +
          this.blocoObject.name +
          "&t=&z=13&ie=UTF8&iwloc=&output=embed";
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
