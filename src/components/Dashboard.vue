<template>
  <div>
    <CurrentlyReadingDisplay />

    <v-card class="filter-display">
      <v-card-text>
        <v-text-field
          prepend-icon="mdi-magnify"
          v-model="searchTerm"
          placeholder="Filter through your list..."
          outlined
          clearable
        ></v-text-field>
      </v-card-text>
    </v-card>

    <SortingButtonsDisplay :books="books" />

    <BooksReadDisplay :booksFilteredByTitle="booksFilteredByTitle" />
  </div>
</template>

<script>
import CurrentlyReadingDisplay from "./DashComponents/CurrentlyReading.vue";
import SortingButtonsDisplay from "./DashComponents/SortingButtons.vue";
import BooksReadDisplay from "./DashComponents/BooksRead.vue";

export default {
  name: "Dashboard",

  data() {
    return {
      searchTerm: "",
    };
  },

  components: {
    CurrentlyReadingDisplay,
    SortingButtonsDisplay,
    BooksReadDisplay,
  },

  computed: {
    books() {
      return this.$store.getters.books;
    },

    booksFilteredByTitle() {
      if (this.searchTerm) {
        return this.books.filter((singleBook) => {
          return (
            singleBook.title
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) > -1
          );
        });
      } else {
        return this.books;
      }
    },
  },
};
</script>

<style scoped>
.filter-display {
  width: 75%;
  margin: 2px auto;
}
</style>
