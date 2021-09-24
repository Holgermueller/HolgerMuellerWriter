<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" dark v-on="on" v-bind="attrs">
          <v-icon left>mdi-note-edit</v-icon>
          Add Comment
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Add a comment about this book
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-textarea v-model="comments" outlined></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" dark @click="closeDialog" color="red">
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            elevation="0"
            dark
            color="blue"
            @click.prevent="submitComments"
          >
            <v-icon left>mdi-note-edit</v-icon>
            Submit</v-btn
          >
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

      comments: "",
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    clearForm() {
      this.$refs.form.reset();
    },

    submitComments() {
      console.log(this.comments);

      this.clearForm();
      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
