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
