<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-on="on" v-bind="attrs">
          Add Comment
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Add a comment about this book
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-textarea outlined></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn dark @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn dark @click.prevent="submitComments">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddCommentDialog",

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    clearForm() {
      this.$refs.form.reset();
    },

    submitComments() {},
  },
};
</script>

<style scoped></style>
