<template>
  <div>
    <CurrentlyReadingDisplay />

    <BooksReadDisplay />
  </div>
</template>

<script>
import CurrentlyReadingDisplay from "./DashComponents/CurrentlyReading.vue";
import BooksReadDisplay from "./DashComponents/BooksRead.vue";

export default {
  name: "Dashboard",

  components: {
    CurrentlyReadingDisplay,
    BooksReadDisplay,
  },
};
</script>
