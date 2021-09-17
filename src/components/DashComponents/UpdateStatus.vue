<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on"> Update status</v-btn>
      </template>

      <v-card>
        <v-card-title>
          title of book here
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-textarea
              placeholder="Any comments to add?"
              outlined
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click.prevent="closeDialog && clearForm">
            <v-icon left>mdi-cancel</v-icon>
            cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn @click.prevent="updateStatus">I'm finished!!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "UpdateStatusDialog",

  data() {
    return {
      dialog: false,
      finished: false,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    clearForm() {
      this.$refs.form.reset();
    },

    updateStatus() {},
  },
};
</script>
