<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" elevation="0" dark v-on="on" v-bind="attrs">
          <v-icon left>mdi-note-edit</v-icon>
          Settings
        </v-btn>
      </template>

      <v-card class="settings-dialog">
        <v-card-title>
          Settings
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-switch
              prepend-icon="mdi-white-balance-sunny"
              append-icon="mdi-moon-waning-crescent"
              label="Night mode"
              class="px-0"
              inset
              color="white"
              :ripple="false"
              @change="toggleDark"
            ></v-switch>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" dark @click="closeDialog" color="red">
            <v-icon left>mdi-cancel</v-icon>
            Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "SettingsDialog",

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.settings-dialog {
  border: 2px solid skyblue;
}
</style>
