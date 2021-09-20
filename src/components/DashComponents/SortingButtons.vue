<template>
  <div id="sortingButtons">
    <v-card class="sorting-buttons-display">
      <v-card-actions>
        <v-btn>Title: A-z</v-btn>
        <v-spacer></v-spacer>
        <v-btn>Title: z-a</v-btn>
        <v-spacer></v-spacer>
        <v-btn>Author: a-z</v-btn>
        <v-spacer></v-spacer>
        <v-btn>
          Author: z-a
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SortingButtonsDisplay",

  data() {
    return {};
  },
};
</script>

<style scoped>
.sorting-buttons-display {
  width: 75%;
  margin: 2px auto;
}
</style>
