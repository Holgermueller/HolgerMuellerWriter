<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Read It</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/dashboard">
        Dash
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn>
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
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
