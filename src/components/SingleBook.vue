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
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleBookPage",

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
