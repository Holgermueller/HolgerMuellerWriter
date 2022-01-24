<template>
  <div id="Contact">
    <h3 class="page-header">Drop me a line:</h3>
    <v-form ref="form">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        required
        label="Name"
        outlined
        clearable
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        required
        label="E-mail"
        outlined
        clearable
      ></v-text-field>
      <v-textarea
        v-model="message"
        :rules="messageRules"
        required
        label="Message..."
        outlined
        clearable
        counter="140"
      ></v-textarea>

      <v-btn color="success" elevation="0" dark block @click="validate"
        >Submit</v-btn
      >
    </v-form>

    <div id="SocialMedia" class="socials">
      <v-btn x-large icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn x-large icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",

  data: () => ({
    valid: false,
    name: "",
    email: "",
    message: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than ten characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => v.length <= 140 || "Message must be less than 140 characters",
    ],
  }),

  methods: {
    validate() {},
  },
};
</script>

<style scoped>
.page-header {
  text-align: left;
  margin-bottom: 5%;
}
.socials {
  margin: 5% auto;
}
</style>
