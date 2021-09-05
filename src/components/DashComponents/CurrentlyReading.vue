<template>
  <div>
    <v-card class="currently-reading-display">
      <v-card-title>
        <h1>Currently reading:</h1>
      </v-card-title>
      <v-card-text>
        <h1>title of book here</h1>
      </v-card-text>
      <v-card-actions>
        <UpdateStatusDialog />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import UpdateStatusDialog from "./UpdateStatus.vue";

export default {
  name: "CurrentlyReadingDisplay",

  components: {
    UpdateStatusDialog,
  },
};
</script>

<style scoped>
.currently-reading-display {
  width: 65%;
  margin: 7px auto;
}
</style>
