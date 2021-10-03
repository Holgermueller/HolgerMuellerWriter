<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" dark v-bind="attrs" v-on="on" color="primary">
          <v-icon class="mdi mdi-book" left></v-icon>
          Add a book
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <v-icon left>mdi-book</v-icon>
          Add a book:
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-text-field
                  type="text"
                  id="title"
                  v-model="title"
                  :rules="rules.title"
                  outlined
                  clearable
                  label="Title"
                >
                </v-text-field>
              </v-row>

              <v-row>
                <v-text-field
                  type="text"
                  id="author"
                  v-model="author"
                  :rules="rules.author"
                  outlined
                  clearable
                  label="Author"
                >
                </v-text-field>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" dark @click="closeDialog" color="red">
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer> </v-spacer>
          <v-btn
            elevation="0"
            dark
            @click.prevent="addBook"
            :disabled="!formIsValid"
            color="blue"
          >
            <v-icon left>mdi-book</v-icon>
            Add book</v-btn
          >
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
      rules: {
        title: [(val) => (val || "").length > 0 || "This field is required."],
        author: [(val) => (val || "").length > 0 || "This field is required."],
      },
    };
  },

  computed: {
    formIsValid() {
      return this.title !== "" && this.author !== "";
    },
  },

  methods: {
    clearForm() {
      this.$refs.form.reset();
    },

    closeDialog() {
      this.dialog = false;
    },

    addBook() {
      const book = {
        title: this.title,
        author: this.author,
      };

      this.$store.dispatch("addBook", book);

      this.clearForm();
      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
