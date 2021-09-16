<template>
  <div id="Login">
    <v-card-text>
      <v-form>
        <v-text-field outlined clearable placeholder="Email"></v-text-field>
        <v-text-field outlined clearable placeholder="Password"></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn>Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn>Submit</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped></style>
