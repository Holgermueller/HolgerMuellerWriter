<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Set Username
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-form ref="form" class="username-form">
        <v-text-field
          v-model="username"
          type="text"
          label="Add username"
          outlined
          clearable
        >
        </v-text-field>
      </v-form>

      <v-card-actions>
        <v-btn elevation="0" color="red" dark @click.prevent="clearForm">
          <v-icon left>mdi-cancel</v-icon>
          Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          elevation="0"
          color="primary"
          dark
          @click.prevent="submitUsername"
        >
          <v-icon left>
            mdi-check
          </v-icon>
          Submit
        </v-btn>
      </v-card-actions>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "UsernameExpansionPanel",

  data() {
    return {
      username: "",
    };
  },

  methods: {
    clearForm() {
      this.$refs.form.reset();
      this.username = "";
    },

    submitUsername() {
      console.log("submitted");
    },
  },
};
</script>

<style scoped>
.username-form {
  margin: 8px auto 0px;
}
</style>
