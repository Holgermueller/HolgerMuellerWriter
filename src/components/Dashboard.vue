<template>
  <div>
    <CurrentlyReadingDisplay />

    <Filters />

    <SortingButtonsDisplay />

    <BooksReadDisplay />
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
};
</script>
