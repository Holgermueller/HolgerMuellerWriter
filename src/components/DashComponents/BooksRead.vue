<template>
  <div>
    <v-card class="section-header">
      <v-card-title>
        <h1>
          Already read:
        </h1>
      </v-card-title>
    </v-card>

    <v-card v-for="(book, index) in books" :key="index" class="book-card">
      <v-card-title>
        <h2>
          {{ book.title }}
        </h2>
      </v-card-title>

      <v-card-subtitle>
        <h3>By: {{ book.author }}</h3>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BooksReadDisplay",

  data() {
    return {};
  },

  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
};
</script>

<style scoped>
.section-header {
  width: 75%;
  margin: 4px auto;
}

.book-card {
  width: 75%;
  margin: 4px auto;
}
</style>
