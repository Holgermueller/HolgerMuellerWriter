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
      <Experience />
      <Education />
      <Interests />
    </v-main>

    <v-footer>&copy; 2022 Holger Mueller</v-footer>
  </v-app>
</template>

<script>
import Bio from "./components/Bio.vue";
import Portfolio from "./components/Portfolio.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Interests from "./components/Interests.vue";

export default {
  name: "App",

  components: {
    Bio,
    Portfolio,
    Experience,
    Education,
    Interests,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.v-main {
  text-align: center;
}
</style>
