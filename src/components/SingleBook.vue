<template>
  <div>
    <v-card class="book-card">
      <v-card-title>
        {{ book.title }}
      </v-card-title>

      <v-card-subtitle>By: {{ book.author }}</v-card-subtitle>

      <v-card-text>
        <div class="rating">
          Rating: rating goes here
        </div>

        <div class="time-spent-reading">
          Began: {{ book.beganReading }}

          Finished: {{ book.finished }}
        </div>

        <div class="comments">
          Comments go here
        </div>
      </v-card-text>

      <v-card-actions>
        <AddComments />
        <v-spacer></v-spacer>
        <RateThisBook />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import AddComments from "./SingleBookComp/AddComments.vue";
import RateThisBook from "./SingleBookComp/RateThisBook.vue";

export default {
  name: "SingleBookPage",

  components: {
    AddComments,
    RateThisBook,
  },

  props: ["id"],

  computed: {
    book() {
      return this.$store.getters.singleBook(this.id);
    },
  },
};
</script>

<style scoped>
.book-card {
  width: 75%;
  margin: 8px auto;
}
</style>
