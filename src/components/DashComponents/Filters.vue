<template>
  <div>
    <v-card class="filter-display">
      <v-card-title>
        filters forlist here.
      </v-card-title>
      <v-card-actions>
        <AddBook />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import AddBook from "./AddABook.vue";

export default {
  name: "AlreadyReadFilters",

  components: {
    AddBook,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.filter-display {
  width: 75%;
  margin: 2px auto;
}
</style>
