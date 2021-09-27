<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Read It</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn dark color="primary" elevation="0" to="/dashboard">
        Dash
      </v-btn>

      <AddBook />

      <v-switch class="px-0" inset></v-switch>

      <v-spacer></v-spacer>

      <v-btn elevation="0" dark color="primary" @click.prevent="logoutUser">
        <span class="mr-2">Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AddBook from "./components/DashComponents/AddABook.vue";

export default {
  name: "App",

  components: {
    AddBook,
  },

  data: () => ({
    //
  }),

  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>
