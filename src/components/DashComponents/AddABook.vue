<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on">
          Add a book
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Add a book:
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-text-field v-model="title"> </v-text-field>
              </v-row>

              <v-row>
                <v-text-field v-model="author"> </v-text-field>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn>Cancel</v-btn>
          v-spacer
          <v-btn>Add book</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddBookDialog",

  data() {
    return {
      dialog: false,
      title: "",
      author: "",
    };
  },

  methods: {
    clearForm() {
      this.$refs.form.reset();
    },

    closeDialog() {
      this.dialog = false;
    },

    addBook() {},
  },
};
</script>

<style scoped></style>
