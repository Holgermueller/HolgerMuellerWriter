<template>
  <div>
    <CurrentlyReadingDisplay />

    <Filters :books="books" />

    <SortingButtonsDisplay />

    <BooksReadDisplay :books="books" />
  </div>
</template>

<script>
import CurrentlyReadingDisplay from "./DashComponents/CurrentlyReading.vue";
import Filters from "./DashComponents/Filters.vue";
import SortingButtonsDisplay from "./DashComponents/SortingButtons.vue";
import BooksReadDisplay from "./DashComponents/BooksRead.vue";

export default {
  name: "Dashboard",

  components: {
    CurrentlyReadingDisplay,
    Filters,
    SortingButtonsDisplay,
    BooksReadDisplay,
  },

  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
};
</script>
