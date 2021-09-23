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
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AlreadyReadFilters",

  props: ["books"],

  data() {
    return {
      searchTerm: "",
    };
  },

  computed: {
    filterByTitle() {
      if (this.searchTerm) {
        return this.books.filter((singleBook) => {
          return singleBook.title;
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
