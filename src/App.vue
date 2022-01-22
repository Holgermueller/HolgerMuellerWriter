<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Holger Mueller Writer</h1>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {};
  },

  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>
