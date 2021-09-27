<template>
  <div id="Register">
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          type="email"
          id="registrationEmail"
          v-model="email"
          placeholder="Email"
          clearable
          outlined
          prepend-icon="mdi-email"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          id="registrationPassword"
          v-model="password"
          placeholder="Password"
          clearable
          outlined
          prepend-icon="mdi-key"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        id="cancelRegistration"
        @click.prevent="clearForm"
        elevation="0"
        dark
        color="red"
      >
        <v-icon left>mdi-cancel</v-icon>
        Cancel</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        id="submitRegistration"
        @click.prevent="submitRegistrationData"
        elevation="0"
        :disabled="!formIsValid"
        dark
        color="primary"
      >
        Register
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    formIsValid() {
      return this.email !== "" && this.password !== "";
    },

    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    clearForm() {
      this.$refs.form.reset();
    },

    submitRegistrationData() {
      console.log(this.password, this.email);

      let registrationData = {
        password: this.password,
        email: this.email,
      };

      this.$store.dispatch("registerUser", registrationData);

      this.clearForm();
    },
  },
};
</script>

<style scoped></style>
