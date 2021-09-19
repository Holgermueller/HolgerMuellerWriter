<template>
  <div>
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
    return {
      searchTerm: "",
    };
  },

  computed: {},
};
</script>

<style scoped>
.filter-display {
  width: 75%;
  margin: 2px auto;
}
</style>
