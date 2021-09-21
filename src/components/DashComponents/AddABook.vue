<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on">
          <v-icon class="mdi mdi-book" left></v-icon>
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
                <v-text-field
                  id="title"
                  v-model="title"
                  outlined
                  clearable
                  placeholder="Title..."
                >
                </v-text-field>
              </v-row>

              <v-row>
                <v-text-field
                  id="author"
                  v-model="author"
                  outlined
                  clearable
                  placeholder="Author"
                >
                </v-text-field>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer> </v-spacer>
          <v-btn @click.prevent="addBook">Add book</v-btn>
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
