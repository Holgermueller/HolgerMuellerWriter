<template>
  <div>
    <CurrentlyReadingDisplay />

    <Filters />

    <BooksReadDisplay />
  </div>
</template>

<script>
import CurrentlyReadingDisplay from "./DashComponents/CurrentlyReading.vue";
import Filters from "./DashComponents/Filters.vue";
import BooksReadDisplay from "./DashComponents/BooksRead.vue";

export default {
  name: "Dashboard",

  components: {
    CurrentlyReadingDisplay,
    Filters,
    BooksReadDisplay,
  },
};
</script>
