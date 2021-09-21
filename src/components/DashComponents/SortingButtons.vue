<template>
  <div id="sortingButtons">
    <v-card class="sorting-buttons-display">
      <v-card-title>
        <v-icon left>mdi-sort</v-icon>
        Sort your list
      </v-card-title>

      <v-card-actions>
        <v-btn @click="sortBy()">
          <v-icon left>mdi-sort-alphabetical-ascending</v-icon>
          Title: A-z</v-btn
        >

        <v-spacer></v-spacer>

        <v-btn @click="reverseSort()">
          <v-icon left>mdi-sort-alphabetical-descending</v-icon>
          Title: z-a</v-btn
        >

        <v-spacer></v-spacer>

        <v-btn @click="sortBy()">
          <v-icon left>mdi-sort-alphabetical-ascending</v-icon>
          Author: a-z</v-btn
        >

        <v-spacer></v-spacer>

        <v-btn @click="reverseSort()">
          <v-icon left>mdi-sort-alphabetical-descending</v-icon>
          Author: z-a
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SortingButtonsDisplay",

  props: {},

  data() {
    return {};
  },

  methods: {
    sortBy() {},

    reverseSort() {},
  },
};
</script>

<style scoped>
.sorting-buttons-display {
  width: 75%;
  margin: 2px auto;
}
</style>
