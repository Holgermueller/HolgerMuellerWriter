<template>
  <div id="alreadyReadCards">
    <v-card class="section-header">
      <v-card-title>
        <h1>
          Already read:
        </h1>
      </v-card-title>
    </v-card>

    <v-card
      v-for="(book, index) in booksFilteredByTitle"
      :key="index"
      id="book.id"
      class="book-card"
    >
      <v-card-title>
        <h2>
          {{ book.title }}
        </h2>

        <v-spacer></v-spacer>

        <v-chip :to="'/singleBook/' + book.id">
          More info
          <v-icon right>
            mdi-arrow-right-bold
          </v-icon>
        </v-chip>
      </v-card-title>

      <v-card-subtitle>
        <h3>By: {{ book.author }}</h3>
      </v-card-subtitle>

      <v-card-actions>
        Began: {{ book.beganReading }}
        <v-spacer></v-spacer>
        Finished: {{ book.finished }}
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BooksReadDisplay",

  props: {
    booksFilteredByTitle: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
#alreadyReadCards {
  margin-bottom: 7%;
}

.section-header {
  width: 75%;
  margin: 4px auto;
}

.book-card {
  width: 75%;
  margin: 4px auto;
}
</style>
