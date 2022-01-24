<template>
  <div id="Contact">
    <v-form ref="form">
      <v-text-field label="Name" outlined clearable></v-text-field>
      <v-text-field label="Email" outlined clearable></v-text-field>
      <v-textarea label="Message..." outlined clearable></v-textarea>

      <v-btn color="success" elevation="0" dark block @click="validate"
        >Submit</v-btn
      >
    </v-form>

    <div id="SocialMedia" class="socials"></div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",

  data: () => ({}),

  methods: {
    validate() {},
  },
};
</script>
