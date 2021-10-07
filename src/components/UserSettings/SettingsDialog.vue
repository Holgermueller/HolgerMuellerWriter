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
          <v-icon left>
            mdi-cog
          </v-icon>
          Settings:
        </v-card-title>

        <v-card-text>
          <v-expansion-panels inset focusable>
            <UsernameExpansionPanel />

            <NightModeExpansionPanel />
          </v-expansion-panels>
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" dark @click="closeDialog" color="red" block>
            <v-icon left>mdi-cancel</v-icon>
            Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import UsernameExpansionPanel from "./UsernameExpPanel.vue";
import NightModeExpansionPanel from "./NightModeExpPanel.vue";

export default {
  name: "SettingsDialog",

  components: {
    UsernameExpansionPanel,
    NightModeExpansionPanel,
  },

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.settings-dialog {
  border: 2px solid skyblue;
}

.v-expansion-panels ::before {
  box-shadow: none;
}
</style>
