<template>
  <v-container>
    <v-card :loading="loading" class="mx-auto my-12" max-width="680px">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" v-bind:src="blocoObject.photo"></v-img>

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

        <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
          <h2>The route param is: {{ this.$route.params.id }}</h2>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="680px">
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
    };
  },
  created: function () {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json")
      .then((response) => response.json())
      .then((json) => {
        this.blocoObject = json.filter(
          (el) => this.$route.params.id == el.name
        );
        console.log("bloco é: " + this.blocoObject);
      });

    this.blocoObject = this.bloco_map_url =
      "https://maps.google.com/maps?q=" +
      this.blocoObject.address +
      " bloco " +
      this.blocoObject.name +
      "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  },
};
</script>
