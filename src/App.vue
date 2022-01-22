<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Holger Mueller Writer</h1>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Bio />
      <Portfolio />
    </v-main>
  </v-app>
</template>

<script>
import Bio from "./components/Bio.vue";
import Portfolio from "./components/Portfolio.vue";

export default {
  name: "App",

  components: {
    Bio,
    Portfolio,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
