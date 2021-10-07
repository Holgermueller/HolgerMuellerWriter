<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Night Mode
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-switch
        prepend-icon="mdi-white-balance-sunny"
        append-icon="mdi-moon-waning-crescent"
        class="px-0"
        inset
        color="white"
        :ripple="false"
        @change="toggleDark"
      ></v-switch>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "NightModeExpansionPanel",

  data() {
    return {};
  },

  methods: {
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped></style>
