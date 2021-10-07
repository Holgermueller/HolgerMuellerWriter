<template>
  <div id="Login">
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          name="email"
          type="email"
          v-model="email"
          :rules="rules.email"
          id="emailLogin"
          outlined
          clearable
          label="Email"
          required
          prepend-icon="mdi-email"
        ></v-text-field>

        <v-text-field
          name="password"
          type="password"
          v-model="password"
          :rules="rules.password"
          id="passwordLogin"
          outlined
          clearable
          label="Password"
          required
          prepend-icon="mdi-key"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        id="cancel"
        @click.prevent="clearForm"
        elevation="0"
        dark
        color="red"
      >
        <v-icon left>mdi-cancel</v-icon>
        Cancel
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        id="submit"
        @click.prevent="submitLoginData"
        elevation="0"
        :disabled="!formIsValid"
        dark
        color="primary"
        >Log In
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      rules: {
        email: [(val) => (val || "").length > 0 || "This field is required."],
        password: [
          (val) => (val || "").length > 0 || "This field is required.",
        ],
      },
    };
  },

  computed: {
    formIsValid() {
      return this.password !== "" && this.email !== "";
    },

    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    clearForm() {
      this.$refs.form.reset();
      this.email = "";
      this.password = "";
    },

    submitLoginData() {
      let loginData = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("loginUser", loginData);

      this.clearForm();
    },
  },
};
</script>

<style scoped></style>
