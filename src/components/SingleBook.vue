<template>
  <div>
    <v-card class="book-card">
      <v-card-title>
        {{ book.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ book.author }}
      </v-card-subtitle>

      <v-card-text> Book data here: {{ book }} </v-card-text>

      <v-card-actions>
        <AddComments />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import AddComments from "./SingleBookComp/AddComments.vue";

export default {
  name: "SingleBookPage",

  components: {
    AddComments,
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
