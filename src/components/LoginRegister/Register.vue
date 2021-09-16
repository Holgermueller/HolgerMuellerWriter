<template>
  <div id="Register">
    <v-card-text>
      <v-form>
        <v-text-field placeholder="Email" clearable outlined></v-text-field>
        <v-text-field placeholder="Password" clearable outlined></v-text-field>
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
  name: "RegisterForm",
};
</script>

<style scoped></style>
